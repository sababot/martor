import AddToCartButton from '@/components/AddToCartButton'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Separator from '@/components/Separator'
import Image from "next/image";
import Link from "next/link"
import { Check, Star, Search } from 'lucide-react';
import SearchForm from '@/components/SearchForm'; // New component

import { getProductsFromCollection, searchProductsInCollection } from '@/lib/shopify';
import { getCollectionByHandle } from '@/lib/shopify';

type Props = {
  params: {
    handle: string;
    title: string
  };
  searchParams: {
    q?: string;
  };
};

export default async function CollectionPage({ params, searchParams }: Props) {
  const searchQuery = searchParams?.q;
  
  let products;
  if (searchQuery) {
    // Search within this collection
    products = await searchProductsInCollection(params.handle, searchQuery);
  } else {
    // Show all products in collection
    products = await getProductsFromCollection(params.handle);
  }
  
  const collection = await getCollectionByHandle(params.handle);

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
                <Link href="/shop" id="all" className="font-normal text-center px-2 font-black text-md">all</Link>
                <Link href="/shop/shirts" id="shirts" className={params.handle === "shirts" ? "font-semibold text-center px-2 font-black text-md" : "font-normal text-center px-2 font-black text-md"}>shirts</Link>
                <Link href="/shop/hoodies" id="hoodies" className={params.handle === "hoodies" ? "font-semibold text-center px-2 font-black text-md" : "font-normal text-center px-2 font-black text-md"}>hoodies</Link>
                <Link href="/shop/pants" id="pants" className={params.handle === "pants" ? "font-semibold text-center px-2 font-black text-md" : "font-normal text-center px-2 font-black text-md"}>pants</Link>
                <Link href="/shop/hats" id="hats" className={params.handle === "hats" ? "font-semibold text-center px-2 font-black text-md" : "font-normal text-center px-2 font-black text-md"}>hats</Link>
                <Link href="/shop/accessories" id="accessories" className={params.handle === "accessories" ? "font-semibold text-center px-2 font-black text-md" : "font-normal text-center px-2 font-black text-md"}>accessories</Link>
                
                {/* Updated search section */}
                <SearchForm currentCategory={params.handle} currentQuery={searchQuery} />
              </div>
            </div>
          </MaxWidthWrapper>
          <div className="w-full border-b border-gray-200 mb-6"></div>
          
          {/* Show search results info */}
          {searchQuery && (
            <div className="flex flex-col items-center justify-center mb-10 my-6 px-4">
              <div className="text-center">
                <h3 className="text-md font-normal mb-6">
                  {products.length} result{products.length !== 1 ? 's' : ''} for "{searchQuery}" in {params.handle}...
                </h3>
              </div>
            </div>
          )}       
          {products && products.length > 0 ? (
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 md:gap-6 px-2 md:px-4 pt-4 mt-2 md:mt-4'>
              {products.map((product: any) => (
                <Link key={product.id} href={`/products/${product.handle}`}>
                  <img src={product.images?.edges?.[0]?.node?.url} alt={product.images?.edges?.[0]?.node?.altText} />
                  <p className='text-center line-clamp-1'>{product.title}</p>
                  <div className='flex justify-center gap-3'>
                    <p className='text-gray-500 text-sm leading-3'>€{product.variants?.edges?.[0]?.node?.price.amount}</p>
                    <div className='w-3 h-3 border-1 border-black border-solid' style={{ backgroundColor: product.variants?.edges?.[0]?.node?.selectedOptions?.find(opt => opt.name.toLowerCase() === 'color')?.value.toLowerCase() || '#888' }}></div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="text-center">
                <h3 className="text-md font-normal mb-6">
                  no items found
                </h3>
                <Link href="/shop" className="hover:font-semibold">[all products]</Link>
              </div>
            </div>
          )}

        </section>
      </div>
    </div>
  );
}