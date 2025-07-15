import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Separator from '@/components/Separator'
import Image from "next/image";
import { Check, Star } from 'lucide-react';

import { getAllCollections } from '@/lib/shopify';

export default async function Home() {
  const unfiltered_collections = await getAllCollections();
  const collections = unfiltered_collections.filter(
    (col: any) => col.handle !== "new-arrivals"
  ); // exclude collection new-arrivals

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      
      <div style={{fontFamily: 'Ubuntu Mono'}}>
        {/* separator */}
        <div className='my-12'></div>

        {/* collections */}
        <section>
          <div className='flex items-center justify-center'>
            <p className='bg-accent text-white px-2 leading-5'>our collections</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 md:gap-6 px-6 md:px-8 lg:px-10 pt-4 mt-2 md:mt-4'>
            <div className='pb-4'>
              <img src="/images/sample/sample-9.webp" alt="shirt-1" />
              <p className='text-center mt-4'>All Items</p>
              <p className='text-center text-sm text-gray-500 leading-4'>8 Items</p>
            </div>
            {collections.map((collection: any) => ( // query through all collections
            <div key={collection.id} className='pt-4 sm:pt-0'>
              <img src={collection.image?.url} alt={collection.images?.edges?.[0]?.node?.altText} />
              <p className='text-center mt-4'>{collection.title}</p>
              <p className='text-center text-sm text-gray-500 leading-4'>{collection.products.edges.length} Items</p>
            </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}