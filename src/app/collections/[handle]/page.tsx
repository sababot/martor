import AddToCartButton from '@/components/AddToCartButton'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Separator from '@/components/Separator'
import Image from "next/image";
import Link from "next/link"
import { Check, Star, Search } from 'lucide-react';

import { getProductsFromCollection } from '@/lib/shopify';
import { getCollectionByHandle } from '@/lib/shopify';

type Props = {
  params: {
    handle: string;
    title: string
  };
};

export default async function Home({ params }: Props) {
  const products = await getProductsFromCollection(params.handle);
  const collection = await getCollectionByHandle(params.handle);

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>

      <div style={{fontFamily: 'Ubuntu Mono'}}>
        <div className='flex items-center justify-center mt-12 mb-6'>
          <p className='bg-accent text-white px-2 leading-5'>{collection?.title ?? params.handle}</p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 md:gap-6 px-2 md:px-4 pt-4 mt-2 md:mt-4'>
          {products.map((product: any) => (
            <Link key={product.id} href={`/products/${product.handle}`}>
              <img src={product.images?.edges?.[0]?.node?.url} alt={product.images?.edges?.[0]?.node?.altText} />
              <p className='text-center line-clamp-1'>{product.title}</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€{product.variants?.edges?.[0]?.node?.price.amount}</p>
                <div className='w-3 h-3 border-1 border-black border-solid' style={{ backgroundColor: product.variants?.edges?.[0]?.node?.selectedOptions?.find(opt => opt.name.toLowerCase() === 'color')?.value.toLowerCase() || '#888' }}></div>
                {product.variants?.edges?.selectedOptions?.edges.find(opt => opt.name.toLowerCase() === 'color')?.map((color: string, i: number) => (
                <div className="w-3 h-3 border-1 border-black border-solid" key={i} style={{ backgroundColor: color }}></div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}