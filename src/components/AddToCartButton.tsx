'use client'

import { useCart } from '@/context/CartContext'

export function AddToCartButton({ variantId }: { variantId: string }) {
  const { addItem } = useCart()

  return (
    <button
      className="bg-black text-white px-4 py-2 rounded"
      onClick={() => addItem(variantId)}
    >
      Add to Cart
    </button>
  )
}
