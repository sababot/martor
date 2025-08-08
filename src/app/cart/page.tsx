'use client'

import '@/app/globals.css';

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const { cart, loading, updateItem, removeItem } = useCart()

  if (loading) return (
    <div>
      <div className="w-full flex justify-center pt-6 my-4 gap-x-4">
        <p className="text-center text-md px-1 bg-[#4f3d74] text-white mt-3">cart</p>
      </div>

      <div className="flex justify-center mt-15">
        <p>Loading...</p>
      </div>
    </div>
  )
  if (!cart || cart.totalQuantity === 0) return (
    <div className="">
      <div className="w-full flex justify-center pt-6 mb-4 my-4 gap-x-4">
        <p className="text-center text-md px-1 bg-[#4f3d74] text-white mt-3">cart</p>
      </div>

      <div className="flex justify-center mt-15">
        <p>Your cart is empty.</p>
      </div>
    </div>
  )

  return (
    <div className="p-4 sm:w-full md:max-w-screen-xl md:mx-auto md:px-40 font-ubuntu text-md" style={{ fontFamily: 'ubuntu' }}>
      <div className="w-full flex justify-center pt-6 mb-8 gap-x-4">
        <p className="text-center text-md px-1 bg-[#4f3d74] text-white mt-3">cart</p>
      </div>
      {cart.lines.map(line => (
        <div key={line.id} className="flex w-full items-center gap-10 mb-6">
          <Image src={line.merchandise.image.url} alt={line.merchandise.title} width={80} height={80} />
          <div>
            <p className="font-semibold">{line.merchandise.title}</p>
            <p className="hidden md:block">€{line.merchandise.priceV2.amount}</p>
            <div className="ml-auto block md:hidden">€{line.cost.totalAmount.amount}</div>
            <div className="flex items-center gap-2 md:hidden">
              <button onClick={() => updateItem(line.id, line.quantity - 1)} disabled={line.quantity <= 1} className="enabled:hover:font-bold disabled:opacity-25">−</button>
              <span>{line.quantity}</span>
              <button onClick={() => updateItem(line.id, line.quantity + 1)} className="hover:font-bold">+</button>
            </div>
          </div>
          <div className="items-center gap-2 hidden md:flex">
            <button onClick={() => updateItem(line.id, line.quantity - 1)} disabled={line.quantity <= 1} className="enabled:hover:font-bold disabled:opacity-25">−</button>
            <span>{line.quantity}</span>
            <button onClick={() => updateItem(line.id, line.quantity + 1)} className="hover:font-bold">+</button>
          </div>
          <button onClick={() => removeItem(line.id)} className="hover:font-bold ml-auto md:ml-0">[remove]</button>
          <div className="ml-auto hidden md:block">€{line.cost.totalAmount.amount}</div>
        </div>
      ))}
      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center justify-center">
          <Link href="/shop" className="hover:font-semibold">[continue shopping]</Link>
        </div>
        <div className="text-right">
          <p>subtotal: €{cart.cost.subtotalAmount.amount}</p>
          <Link href="/checkout" className="bg-[#4f3d74] text-white mt-2 px-1 py-1 hover:opacity-80">[checkout]</Link>
        </div>
      </div>
    </div>
  )
}