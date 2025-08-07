'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

// Shopify Storefront endpoint and token
const domain  = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const token   = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const version = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION!;

const STOREFRONT_URL   = `https://${domain}/api/${version}/graphql.json`;
const STOREFRONT_TOKEN = token;

console.log(
  'Shopify URL:', STOREFRONT_URL,
  'Token:', !!STOREFRONT_TOKEN
);

// Types
interface CartLine {
  id: string
  quantity: number
  merchandise: {
    id: string
    title: string
    priceV2: { amount: string; currencyCode: string }
    image: { url: string }
  }
  cost: { totalAmount: { amount: string; currencyCode: string } }
}

interface Cart {
  id: string
  totalQuantity: number
  cost: { subtotalAmount: { amount: string; currencyCode: string } }
  lines: CartLine[]
}

type CartContextType = {
  cart: Cart | null
  loading: boolean
  addItem: (variantId: string, qty: number) => Promise<void>
  updateItem: (lineId: string, qty: number) => Promise<void>
  removeItem: (lineId: string) => Promise<void>
}

const CartContext = createContext<CartContextType>({} as CartContextType)

// GraphQL fetch helper
async function storefrontFetch(query: string, variables = {}) {
  const res = await fetch(STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  })
  const json = await res.json()
  if (json.errors) {
    console.error('Shopify errors', json.errors)
    throw new Error('Shopify Storefront error')
  }
  return json.data
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null)
  const [loading, setLoading] = useState(true)

  // Create cart
  const createCart = async (): Promise<Cart> => {
    const mutation = `
      mutation {
        cartCreate {
          cart { id totalQuantity cost { subtotalAmount { amount currencyCode } } }
        }
      }
    `
    const data = await storefrontFetch(mutation)
    const newCart: Cart = { ...data.cartCreate.cart, lines: [] }
    localStorage.setItem('shopifyCartId', newCart.id)
    return newCart
  }

  // Fetch cart by ID
  const fetchCart = async (id: string): Promise<Cart> => {
    const query = `
      query GetCart($id: ID!) {
        cart(id: $id) {
          id totalQuantity cost { subtotalAmount { amount currencyCode } }
          lines(first: 100) {
            edges { node { id quantity cost { totalAmount { amount currencyCode } } merchandise { ... on ProductVariant { id title priceV2 { amount currencyCode } image { url } } } } }
          }
        }
      }
    `
    const data = await storefrontFetch(query, { id })
    const c = data.cart
    return {
      id: c.id,
      totalQuantity: c.totalQuantity,
      cost: c.cost,
      lines: c.lines.edges.map((e: any) => e.node),
    }
  }

  // Initialize cart on mount
  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const storedId = localStorage.getItem('shopifyCartId')
        let baseCart: Cart
        if (storedId) {
          try {
            baseCart = await fetchCart(storedId)
          } catch {
            baseCart = await createCart()
          }
        } else {
          baseCart = await createCart()
        }
        const fullCart = await fetchCart(baseCart.id)
        setCart(fullCart)
      } catch (err) {
        console.error('Cart init error', err)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  // Add item
  const addItem = async (variantId: string, qty: number) => {
    if (!cart) {
      console.warn('Cart not ready, retrying...')
      return
    }
    const mutation = `
      mutation AddLines($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart { id totalQuantity cost { subtotalAmount { amount currencyCode } } lines(first: 100) { edges { node { id quantity cost { totalAmount { amount currencyCode } } merchandise { ... on ProductVariant { id title priceV2 { amount currencyCode } image { url } } } } } } }
        }
      }
    `
    const data = await storefrontFetch(mutation, {
      cartId: cart.id,
      lines: [{ merchandiseId: variantId, quantity: qty }],
    })
    const c = data.cartLinesAdd.cart
    setCart({ id: c.id, totalQuantity: c.totalQuantity, cost: c.cost, lines: c.lines.edges.map((e: any) => e.node) })
  }

  // Update item
  const updateItem = async (lineId: string, qty: number) => {
    if (!cart || qty < 1) return
    const mutation = `
      mutation UpdateLines($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
        cartLinesUpdate(cartId: $cartId, lines: $lines) { cart { id } }
      }
    `
    await storefrontFetch(mutation, { cartId: cart.id, lines: [{ id: lineId, quantity: qty }] })
    setCart(await fetchCart(cart.id))
  }

  // Remove item
  const removeItem = async (lineId: string) => {
    if (!cart) return
    const mutation = `
      mutation RemoveLines($cartId: ID!, $lineIds: [ID!]!) {
        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) { cart { id } }
      }
    `
    await storefrontFetch(mutation, { cartId: cart.id, lineIds: [lineId] })
    setCart(await fetchCart(cart.id))
  }

  return (
    <CartContext.Provider value={{ cart, loading, addItem, updateItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)