import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Separator from '@/components/Separator'
import Image from "next/image";
import Link from "next/link"
import { Check, Star, Search } from 'lucide-react';

import { getProduct } from '@/lib/shopify';
import { getProducts } from '@/lib/shopify';

import ProductImageViewer from '@/components/ProductImageViewer'

type Props = {
  params: {
    handle: string;
  };
};

export default async function Home({ params }: Props) {
  const product = await getProduct(params.handle);

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
          <ProductImageViewer images={product.images.edges} className="block md:hidden" />
          <div className="h-full block sticky top-22 ml-5 flex-1/4">
            <div className="justify-start flex">
              <p className="font-md bg-[#4f3d74] text-white px-2 mb-2">{product.title}</p>
            </div>
            <p className="font-md text-gray-600">€{product.variants.edges[0].node.price.amount}</p>
            <br/>
            <p className="font-md">{product.description}</p>
            <br/><br/>
            <p className="font-md mb-5">[color]</p>
            <div className="flex gap-7">
              {product.variants?.edges?.selectedOptions?.edges.find(opt => opt.name.toLowerCase() === 'color')?.map((color: string, i: number) => (
              <div className="border-2 border-gray-800 w-4 h-4" key={i} style={{ backgroundColor: color }}></div>
              ))}
            </div>
            <div className="flex gap-7">
              {[
                ...new Set(
                  product.variants.edges
                    .flatMap((edge: any) =>
                      edge.node.selectedOptions
                        .filter((opt: any) => opt.name.toLowerCase() === 'color')
                        .map((opt: any) => opt.value.toLowerCase())
                    )
                ),
              ].map((color: string, i: number) => (
                <div
                  key={i}
                  className={`w-4 h-4 border-2 ${i === 0 ? 'border-gray-600' : 'border-gray-200'}`}
                  style={{ backgroundColor: color }}
                  title={color}
                ></div>
              ))}
            </div>
            <br/><br/>
            <p className="font-md mb-5">[size]</p>
            <div className="flex gap-8 ml-1">
              <p className="font-md">S</p>
              <p className="font-md">M</p>
              <p className="font-md">L</p>
              <p className="font-md">XL</p>
              <p className="font-md">2XL</p>
            </div>

            <br/><br/>
            {/* ADD TO CART */}
            <div className="flex justify-center mt-5 mb-[50px]">
              <a
                href="{{ object.get_add_to_cart_url }}"
                className="show-all bg-[#4f3d74] text-white px-1"
              >
                [add to cart]
              </a>
            </div>

            <div>
              {/* DETAILS */}
              <button
                className="product-button">
                [details]
              </button>
              <div
                id="details-product"
                className="block mb-0 text-sm"
              >
                <p className="text-sm mb-0">- material: 100% cotton</p>
                <p className="text-sm mb-0">
                  - textile weight: 180 g/cm<sup>2</sup> (5.3 oz/yd<sup>2</sup>)
                </p>
                <p className="text-sm mb-0">- pre-shrunken textile</p>
                <p className="text-sm mb-2.5">- open-end yarn spinning</p>
              </div>

              {/* SIZING */}
              <br/>
              <button className="product-button mt-4">
                [sizing]
              </button>
              <div
                id="sizing-product"
                className="hidden mb-0 text-sm"
              >
                <div className="flex justify-center">
                  <img
                    src="../../static/images/gildan-men-sizing.png"
                    alt="Sizing chart"
                    className="w-[300px]"
                  />
                </div>
              </div>

              {/* SHIPPING */}
              <br/>
              <button
                className="product-button mt-4">
                [shipping]
              </button>
              <div
                id="shipping-product"
                className="hidden mb-2.5 text-sm"
              >
                <p className="text-sm mb-0">- spain orders for this item take 4-10 working days</p>
                <p className="text-sm mb-0">- europe orders for this item take 6-12 working days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}