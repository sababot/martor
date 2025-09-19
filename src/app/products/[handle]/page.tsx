import AddToCartButton from '@/components/AddToCartButton'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Separator from '@/components/Separator'
import Image from "next/image";
import Link from "next/link"
import { Check, Star, Search } from 'lucide-react';

import { getProduct } from '@/lib/shopify';
import { getProductsCompressed } from '@/lib/shopify';

import ProductImageViewer from '@/components/ProductImageViewer'
import ProductInfoSections from '@/components/ProductInfoSections'
import ProductOptions from "@/components/ProductOptions";

type Props = {
  params: {
    handle: string;
  };
};

export default async function Home({ params }: Props) {
  const allProducts = await getProductsCompressed();
  const product = await getProduct(params.handle);

  const productGid = 'gid://shopify/Product/${product.id}' // or however you get it

  const variantId = product.variants.edges[0].node.id

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>

      <div style={{fontFamily: 'Ubuntu Mono'}}>
        <div id="product-desktop" className="block md:flex pt-10 justify-start ml-0 mr-3 gap-1 w-auto">
          <div className="w-full overflow-y-auto flex-3/4 hidden md:block">
            {product.images.edges.map((image: any, i: number) => (
              <img key={i} src={image.node.url} alt={image.node.altText || product.title} className="w-full block mb-4"/>
            ))}
          </div>
          <ProductImageViewer images={product.images.edges} className="hidden" />
          <div className="h-full block sticky top-22 ml-5 flex-1/4">
            <div className="justify-start flex">
              <p className="font-md bg-[#4f3d74] text-white px-2 mb-2">{product.title}</p>
            </div>
            <p className="font-md text-gray-600">€{product.variants.edges[0].node.price.amount}</p>
            <br/>
            <p className="font-md">{product.description}</p>
            <br/><br/>
            <ProductOptions product={product} allProducts={allProducts} />
            <ProductInfoSections></ProductInfoSections>
          </div>
        </div>
      </div>
    </div>
  );
}