import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Separator from '@/components/Separator'
import Image from "next/image"
import Link from "next/link"
import { Check, Star, Search } from 'lucide-react';

import { getProductsCompressed } from '@/lib/shopify';
import ProductGrid from '@/components/ProductGrid';

export default async function Home() {
  const products = await getProductsCompressed();

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>

      <div style={{fontFamily: 'Ubuntu Mono'}}>
        <section>
          <MaxWidthWrapper>
            <div id="shop-heading" className="w-full relative whitespace-nowrap no-scrollbar overflow-scroll md:overflow-hidden mt-0" >
              <div className="flex justify-around gap-x-5 mx-4">
                <button id="all" className="text-center px-2 font-black text-md font-normal">all</button>
                <button id="shirts" className="text-center px-2 font-black text-md font-normal">shirts</button>
                <button id="hoodies" className="text-center px-2 font-black text-md font-normal">hoodies</button>
                <button id="pants" className="text-center px-2 font-black text-md font-normal">pants</button>
                <button id="hats" className="text-center px-2 font-black text-md font-normal">hats</button>
                <button id="accessories" className="text-center px-2 font-black text-md font-normal">accessories</button>
                <div className="gap-x-1 hidden md:flex" id="search-input-container">
                  <Link href='/search'>
                    <Search strokeWidth={2} className="w-4 pt-0.25"/>
                  </Link>
                  <input type="text" name="" placeholder="search" id="search_input" className="border-0 decoration-0 outline-0 text-left"/>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
          <div className="w-full border-b border-gray-200 mb-6"></div>

          <ProductGrid products={products} />

        </section>
      </div>
    </div>
  );
}