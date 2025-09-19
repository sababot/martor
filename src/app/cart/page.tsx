'use client'

import '@/app/globals.css';

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

const colorMap: Record<string, string> = {
  "Pastel Magenta": "#D8B4FE",
  "Black": "#000000",
  "White": "#FFFFFF",
  "Navy": "#001F3F",
  "Forest Green": "#228B22",
  "Red": "#FF0000",
};

const sizeMap: Record<string, string> = {
  "S": "SMALL",
  "M": "MEDIUM",
  "L": "LARGE",
  "XL": "XLARGE",
  "2XL": "2XLARGE",
};

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

      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center">
          <h3 className="text-md font-normal mb-6">
            your cart is empty...
          </h3>
          <Link href="/shop" className="hover:font-semibold">[all products]</Link>
        </div>
      </div>
    </div>
  )

  return (
    <div className="p-4 sm:w-full md:max-w-screen-xl md:mx-auto md:px-30 font-ubuntu text-md" style={{ fontFamily: 'ubuntu' }}>
      <div className="w-full flex justify-center pt-6 mb-8 gap-x-4">
        <p className="text-center text-md px-1 bg-[#4f3d74] text-white mt-3">cart</p>
      </div>
      {cart.lines.map(line => {
        const sizeOption = line.merchandise.selectedOptions?.find(opt => opt.name.toLowerCase() === 'size');
        const sizeKey = sizeOption ? sizeOption.value.toUpperCase() : null;
        const displaySize = sizeKey && sizeMap[sizeKey] ? sizeMap[sizeKey] : sizeOption?.value || 'N/A';


        return (
          <div key={line.id}>

            {/* desktop */}
            <div className="md:grid-cols-4 w-full items-center gap-10 mb-6 hidden md:grid">
              <Link href={`/products/${line.merchandise.product.handle}`}>
                <div className="flex gap-6 items-center mr-auto">
                  <div className="w-20 h-20 relative shrink-0">
                    <Image src={line.merchandise.image.url} alt={line.merchandise.title} fill sizes="80px" className="object-cover"/>
                  </div>
                  <div className="min-w-fit">
                    <p className="font-semibold">{line.merchandise.product.title}</p>
                    <div className="flex gap-4">
                      <p className="">€{line.merchandise.priceV2.amount}</p>
                      <p>{displaySize}</p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="items-center gap-2 flex ml-auto">
                <button onClick={() => updateItem(line.id, line.quantity - 1)} disabled={line.quantity <= 1} className="enabled:hover:font-bold disabled:opacity-25">−</button>
                <span>{line.quantity}</span>
                <button onClick={() => updateItem(line.id, line.quantity + 1)} className="hover:font-bold">+</button>
              </div>
              <button onClick={() => removeItem(line.id)} className="hover:font-bold ml-auto">[remove]</button>
              <div className="ml-auto">€{line.cost.totalAmount.amount}</div>
            </div>

            {/* mobile */}
            <div className="flex md:hidden w-full items-center gap-10 mb-6">
              <div className="flex gap-6 items-center">
                <Link href={`/products/${line.merchandise.product.handle}`}>
                  <div className="w-20 h-20 relative shrink-0">
                    <Image src={line.merchandise.image.url} alt={line.merchandise.title} fill sizes="80px" className="object-cover"/>
                  </div>
                </Link>
                <div className="text-left">
                  <p className="font-semibold line-clamp-1">{line.merchandise.product.title}</p>
                  <p>{displaySize}</p>
                  <div className="flex items-center gap-6">
                    <div className="">€{line.cost.totalAmount.amount}</div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateItem(line.id, line.quantity - 1)} disabled={line.quantity <= 1} className="enabled:hover:font-bold disabled:opacity-25">−</button>
                      <span>{line.quantity}</span>
                      <button onClick={() => updateItem(line.id, line.quantity + 1)} className="hover:font-bold">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={() => removeItem(line.id)} className="hover:font-bold ml-auto md:ml-0">[remove]</button>
            </div>

          </div>
        )
      })}
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