'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import {
  addToCart,
  createCart,
  getCart,
  removeFromCart,
  updateCartItem,
} from '@/lib/shopify'

const CartContext = createContext<any>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cartId = localStorage.getItem('cartId')
    if (!cartId) {
      setLoading(false)
      return
    }

    getCart(cartId)
      .then((data) => {
        setCart(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const addItem = async (variantId: string, quantity = 1) => {
    let cartId = localStorage.getItem('cartId')
    if (!cartId) {
      const newCart = await createCart(variantId, quantity)
      localStorage.setItem('cartId', newCart.id)
      setCart(newCart)
      return
    }
    await addToCart(cartId, variantId, quantity)
    const updated = await getCart(cartId)
    setCart(updated)
  }

  const updateItem = async (lineId: string, quantity: number) => {
    const cartId = localStorage.getItem('cartId')
    if (!cartId) return
    await updateCartItem(cartId, lineId, quantity)
    const updated = await getCart(cartId)
    setCart(updated)
  }

  const removeItem = async (lineId: string) => {
    const cartId = localStorage.getItem('cartId')
    if (!cartId) return
    await removeFromCart(cartId, lineId)
    const updated = await getCart(cartId)
    setCart(updated)
  }

  return (
    <CartContext.Provider value={{ cart, loading, addItem, updateItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
