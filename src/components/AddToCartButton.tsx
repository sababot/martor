'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { useFirstVariant } from '@/lib/cart'

export default function AddToCartButton({ variantId }: { variantId: string }) {
  const { addItem, loading: cartLoading } = useCart()
  const [adding, setAdding] = useState(false)

  const handle = async () => {
    if (cartLoading || !variantId) return
    setAdding(true)
    try {
      console.log('Adding variant:', variantId)
      await addItem(variantId, 1)
      console.log('Item added successfully')
    } catch (err) {
      console.error('Error adding to cart', err)
    } finally {
      setAdding(false)
    }
  }

  return (
    <button
      onClick={handle}
      disabled={cartLoading || adding || !variantId}
      className="bg-[#4f3d74] text-white px-1 hover:opacity-80 disabled:opacity-50"
    >
      {cartLoading
        ? '[loading cart…]'
        : !variantId
        ? '[loading product…]'
        : adding
        ? '[adding…]'
        : '[add to cart]'}
    </button>
  )
}
