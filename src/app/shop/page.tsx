import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Separator from '@/components/Separator'
import Image from "next/image";
import { Check, Star } from 'lucide-react';

import { getProducts } from '@/lib/shopify';

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>

      <div style={{fontFamily: 'Ubuntu Mono'}}>
        <section>
          <MaxWidthWrapper>
            <div id="shop-heading" className="w-full relative whitespace-nowrap overflow-hidden mt-0" >
              <div className="flex justify-around gap-x-5 mx-4">
                <button id="all" className="text-center px-2 font-black text-md font-normal">all</button>
                <button id="shirts" className="text-center px-2 font-black text-md font-normal">shirts</button>
                <button id="hoodies" className="text-center px-2 font-black text-md font-normal">hoodies</button>
                <button id="pants" className="text-center px-2 font-black text-md font-normal">pants</button>
                <button id="hats" className="text-center px-2 font-black text-md font-normal">hats</button>
                <button id="accessories" className="text-center px-2 font-black text-md font-normal">accessories</button>
                <div className="flex" id="search-input-container">
                  <i className="fas fa-magnifying-glass"></i>
                  <input type="text" name="" placeholder="search" id="search_input"/>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
          <div className="w-full border-b border-gray-200 mb-6"></div>
          <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 md:gap-6 px-2 md:px-4 pt-4 mt-2 md:mt-4'>
            {products.map((product: any) => (
              <div key={product.id}>
                <img src={product.images?.edges?.[0]?.node?.url} alt={product.images?.edges?.[0]?.node?.altText} />
                <p className='text-center line-clamp-2'>{product.title}</p>
                <div className='flex justify-center gap-3'>
                  <p className='text-gray-500 text-sm leading-3'>€{product.variants?.edges?.[0]?.node?.price.amount}</p>
                  <div className='w-3 h-3 border-1 border-black border-solid' style={{ backgroundColor: product.variants?.edges?.[0]?.node?.selectedOptions?.find(opt => opt.name.toLowerCase() === 'color')?.value.toLowerCase() || '#888' }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}