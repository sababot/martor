'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const { cart, loading, updateItem, removeItem } = useCart()

  if (loading) return <p>Loading…</p>
  if (!cart || cart.totalQuantity === 0) return <p>Your cart is empty.</p>

  return (
    <div className="p-4 font-['Ubuntu_Mono']">
      <div className="w-full flex justify-center pt-8 mb-2 gap-x-4">
        <p className="text-center text-md px-1 bg-[#4f3d74] text-white mt-3">cart</p>
      </div>
      {cart.lines.map(line => (
        <div key={line.id} className="flex items-center gap-4 mb-6">
          <Image src={line.merchandise.image.url} alt={line.merchandise.title} width={80} height={80} />
          <div>
            <p className="font-semibold">{line.merchandise.title}</p>
            <p>€{line.merchandise.priceV2.amount}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => updateItem(line.id, line.quantity - 1)} disabled={line.quantity <= 1}>−</button>
            <span>{line.quantity}</span>
            <button onClick={() => updateItem(line.id, line.quantity + 1)}>+</button>
          </div>
          <button onClick={() => removeItem(line.id)}>[remove]</button>
          <div className="ml-auto">€{line.cost.totalAmount.amount}</div>
        </div>
      ))}
      <div className="flex justify-between items-center mt-8">
        <Link href="/shop" className="hover:font-bold">[continue shopping]</Link>
        <div className="text-right">
          <p>subtotal: €{cart.cost.subtotalAmount.amount}</p>
          <Link href="/checkout" className="bg-[#4f3d74] text-white px-1">[checkout]</Link>
        </div>
      </div>
    </div>
  )
}