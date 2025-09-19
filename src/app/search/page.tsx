// app/search/page.tsx - Global search page with debugging
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from "next/link"
import { Search } from 'lucide-react';
import { searchAllProducts, getAllProducts } from '@/lib/shopify';

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function GlobalSearchPage({ searchParams }: Props) {
  const searchQuery = searchParams?.q;
  
  let products = [];
  let totalProductCount = 0;
  
  // Get total product count for debugging
  try {
    const allProducts = await getAllProducts();
    totalProductCount = allProducts.length;
  } catch (error) {
    console.error('Error getting product count:', error);
  }
  
  if (searchQuery && searchQuery.trim()) {
    products = await searchAllProducts(searchQuery.trim());
  }

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>

      <div style={{fontFamily: 'Ubuntu Mono'}}>
        <MaxWidthWrapper>
          <div id="shop-heading" className="w-full relative whitespace-nowrap no-scrollbar overflow-scroll md:overflow-hidden mt-0" >
            <div className="flex justify-around gap-x-5 mx-4">
              <Link href="/shop" id="all" className="text-center px-2 font-black text-md font-normal">all</Link>
              <Link href="shop/shirts" id="shirts" className="text-center px-2 font-black text-md font-normal">shirts</Link>
              <Link href="shop/hoodies" id="hoodies" className="text-center px-2 font-black text-md font-normal">hoodies</Link>
              <Link href="shop/pants" id="pants" className="text-center px-2 font-black text-md font-normal">pants</Link>
              <Link href="shop/hats" id="hats" className="text-center px-2 font-black text-md font-normal">hats</Link>
              <Link href="shop/accessories" id="accessories" className="text-center px-2 font-black text-md font-normal">accessories</Link>
              <div className="gap-x-1 hidden md:flex" id="search-input-container">
                <Link href='/search'>
                  <Search strokeWidth={2} className="w-4 pt-0.25"/>
                </Link>
                <form action="/search" method="GET">
                  <input type="text" name="q" placeholder="search" id="search_input" defaultValue={searchQuery} className="border-0 decoration-0 outline-0 text-left"/>
                </form>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="w-full border-b border-gray-200 mb-6"></div>
        <section className="mb-8">
          <div className="gap-x-1 flex md:hidden border-2 w-auto mx-4 px-1" id="search-input-container">
            <Search strokeWidth={2} className="w-4 pt-0.25"/>
            <form action="/search" method="GET">
              <input type="text" name="q" placeholder="search" id="search_input" defaultValue={searchQuery} className="w-full border-0 decoration-0 outline-0 text-left"/>
            </form>
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="flex flex-col items-center justify-center mb-6 my-6 px-4">
              <div className="text-center">
                <h3 className="text-md font-normal">
                  {products.length} result{products.length !== 1 ? 's' : ''} for "{searchQuery}" 
                {totalProductCount > 0 && ` (searched ${totalProductCount} total products)`}...
                </h3>
              </div>
            </div>
          )}

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 md:gap-6 mx-4'>
              {products.map((product: any) => (
                <Link key={product.id} href={`/products/${product.handle}`}>
                  <div className="group">
                    <img 
                      src={product.images?.edges?.[0]?.node?.url} 
                      alt={product.images?.edges?.[0]?.node?.altText} 
                      className="w-full h-auto group-hover:opacity-90 transition-opacity"
                    />
                    <p className='text-center line-clamp-1 mt-2'>{product.title}</p>
                    
                    {/* Show which collections this product belongs to */}
                    {product.collections?.edges?.length > 0 && (
                      <p className="text-xs text-gray-500 text-center mb-1">
                        in {product.collections.edges[0].node.title}
                      </p>
                    )}
                    
                    <div className='flex justify-center gap-3 mt-1'>
                      <p className='text-gray-500 text-sm leading-3'>
                        €{product.variants?.edges?.[0]?.node?.price.amount}
                      </p>
                      <div 
                        className='w-3 h-3 border border-black border-solid' 
                        style={{ 
                          backgroundColor: product.variants?.edges?.[0]?.node?.selectedOptions?.find(opt => opt.name.toLowerCase() === 'color')?.value.toLowerCase() || '#888' 
                        }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="flex flex-col items-center justify-center py-16 px-4">
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="text-center">
                <h3 className="text-md font-normal mb-6">
                  [start typing to search]
                </h3>
              </div>
            </div>
          )}

        </section>
      </div>
    </div>
  );
}