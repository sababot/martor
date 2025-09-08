'use client'

import { useState, useEffect } from 'react';
import Link from "next/link"

interface Product {
  id: string;
  handle: string;
  title: string;
  productType: string;
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string;
      }
    }>
  };
  variants: {
    edges: Array<{
      node: {
        price: {
          amount: string;
        };
        selectedOptions: Array<{
          name: string;
          value: string;
        }>;
      }
    }>
  };
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter products based on category
  const filterProducts = (category: string) => {
    setActiveFilter(category);
    
    if (category === 'all') {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(product => {
      const productType = product.productType?.toLowerCase() || '';
      const productTitle = product.title?.toLowerCase() || '';
      
      // You can customize this logic based on how your products are categorized
      // This example uses both productType and title to match categories
      return productType.includes(category.toLowerCase()) || 
             productTitle.includes(category.toLowerCase());
    });

    setFilteredProducts(filtered);
  };

  // Handle category button clicks
  useEffect(() => {
    const buttons = ['all', 'shirts', 'hoodies', 'pants', 'hats', 'accessories'];
    
    buttons.forEach(buttonId => {
      const button = document.getElementById(buttonId);
      if (button) {
        button.addEventListener('click', () => filterProducts(buttonId));
      }
    });

    // Cleanup event listeners
    return () => {
      buttons.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
          button.removeEventListener('click', () => filterProducts(buttonId));
        }
      });
    };
  }, []);

  // Update button styles based on active filter
  useEffect(() => {
    const buttons = ['all', 'shirts', 'hoodies', 'pants', 'hats', 'accessories'];
    
    buttons.forEach(buttonId => {
      const button = document.getElementById(buttonId);
      if (button) {
        if (buttonId === activeFilter) {
          button.className = "text-center px-2 font-black text-md font-normal bg-black text-white";
        } else {
          button.className = "text-center px-2 font-black text-md font-normal hover:bg-gray-100";
        }
      }
    });
  }, [activeFilter]);

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 md:gap-6 px-2 md:px-4 pt-4 mt-2 md:mt-4'>
      {filteredProducts.map((product: Product) => (
        <Link key={product.id} href={`/products/${product.handle}`}>
          <img src={product.images?.edges?.[0]?.node?.url} alt={product.images?.edges?.[0]?.node?.altText} />
          <p className='text-center line-clamp-1'>{product.title}</p>
          <div className='flex justify-center gap-3'>
            <p className='text-gray-500 text-sm leading-3'>€{product.variants?.edges?.[0]?.node?.price.amount}</p>
            {product.variants?.edges?.flatMap(edge => 
              edge.node.selectedOptions
                .filter(opt => opt.name.toLowerCase() === 'color')
                .map(opt => opt.value)
            )
            .filter((value, index, self) => self.indexOf(value) === index)
            .map((color, i) => (
              <div key={i} className="w-3 h-3 border border-black" style={{ backgroundColor: color.toLowerCase() }}></div>
            ))}
          </div>
        </Link>
      ))}
      
      {/* Show message when no products found */}
      {filteredProducts.length === 0 && (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-500">No products found for this category.</p>
        </div>
      )}
    </div>
  );
}