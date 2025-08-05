'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Separator from '@/components/Separator'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function Home() {
const { cart, loading, addItem, updateItem, removeItem } = useCart()

if (loading) {
return <p className="p-4 font-['Ubuntu_Mono']">Loading…</p>
}

if (!cart || cart.totalQuantity === 0) {
return <p className="p-4 font-['Ubuntu_Mono']">Cart is empty.</p>
}

return ( <div> <link rel="preconnect" href="https://fonts.googleapis.com" /> <link rel="preconnect" href="https://fonts.gstatic.com" /> <link
     href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
     rel="stylesheet"
   />

```
  <div style={{ fontFamily: 'Ubuntu Mono' }}>
    {/* separator */}
    <div className="my-8" />

    {cart.lines.map((line) => (
      <div key={line.id} className="flex items-center gap-4 mb-6">
        <Image
          src={line.merchandise.image.url}
          alt={line.merchandise.title}
          width={100}
          height={100}
        />
        <div>
          <p className="font-semibold">{line.merchandise.title}</p>
          <p>€{line.merchandise.priceV2.amount}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateItem(line.id, line.quantity - 1)}
            disabled={line.quantity <= 1}
          >
            −
          </button>
          <span>{line.quantity}</span>
          <button onClick={() => updateItem(line.id, line.quantity + 1)}>
            +
          </button>
        </div>
        <button onClick={() => removeItem(line.id)}>[remove]</button>
        <div className="ml-auto">
          <p>€{line.cost.totalAmount.amount}</p>
        </div>
      </div>
    ))}

    <div className="flex justify-between items-center mt-8">
      <Link href="/shop" className="underline">
        ← Continue shopping
      </Link>
      <div className="text-right">
        <p className="mb-2">Subtotal: €{cart.cost.subtotalAmount.amount}</p>
        <Link
          href="/checkout"
          className="bg-[#4f3d74] text-white px-4 py-2 rounded"
        >
          Checkout
        </Link>
      </div>
    </div>
  </div>
</div>
)}
