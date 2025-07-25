import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Separator from '@/components/Separator'
import Image from "next/image";
import Link from "next/link"
import { Check, Star, Search } from 'lucide-react';

import { getProducts } from '@/lib/shopify';

export default async function Home() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>

      <div style={{fontFamily: 'Ubuntu Mono'}}>
        <div id="product-desktop" className="flex pt-10 justify-start ml-0 mr-3 gap-1 w-auto">
          <div className="w-full overflow-y-auto flex-3/4">
            <img src="https://cdn.shopify.com/s/files/1/0960/2780/3980/files/classic-shirt-magenta-front_15506aa3-b503-43a1-b9ee-788146f035bc.png?v=1752861730" className="w-full block"/>
            <img src="https://cdn.shopify.com/s/files/1/0960/2780/3980/files/classic-shirt-magenta-front_15506aa3-b503-43a1-b9ee-788146f035bc.png?v=1752861730" className="w-full block"/>
          </div>
          <div className="h-full block sticky top-22 ml-5 flex-1/4">
            <div className="justify-start flex">
              <p className="font-md bg-[#4f3d74] text-white px-2 mb-2">Classic Shirt Magenta</p>
            </div>
            <p className="font-md">€20</p>
            <br/>
            <p className="font-md">Martor classic tee with hella flow, trynna be the bosss, wear this martor tee. you may die, but you'll die with flow</p>
            <br/><br/>
            <p className="font-md mb-5">[color]</p>
            <div className="flex gap-7 ml-2">
              <div className="border-radius-full bg-[#4f3d74] w-5 h-5"></div>
              <div className="border-radius-full bg-blue w-5 h-5"></div>
              <div className="border-radius-full bg-grey w-5 h-5"></div>
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