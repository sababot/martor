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
        <div id="product-desktop" className="flex pt-10 justify-start ml-0 mr-2 gap-1 w-auto">
          <div className="w-full overflow-y-auto">
            <img src="../../static/images/collections/1/{{ object.slug }}-front.png" className="w-full block"/>
            <img src="../../static/images/collections/1/{{ object.slug }}-back.png" className="w-full block"/>
          </div>
          <div className="w-auto h-full block sticky top-10 ml-5">
            <div className="justify-start flex">
              <p className="font-md background-color-[#4f3d74] font-white pr-5 mb-2">title</p>
            </div>
            <p className="font-md">€20</p>
            <br/><br/>
            <p className="font-md">description</p>
            <br/><br/>
            <p className="font-md mb-5">[color]</p>
            <div className="flex gap-7 ml-2">
              <div className="border-radius-full background-color-purple w-5 h-5"></div>
              <div className="border-radius-full background-color-blue w-5 h-5"></div>
              <div className="border-radius-full background-color-grey w-5 h-5"></div>
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

            <div>
              {/* DETAILS */}
              <button
                className="product-button"
                onclick="
                  if (document.getElementById('details-product').style.display == 'block'){
                    document.getElementById('details-product').style.display = 'none';
                  } else {
                    document.getElementById('details-product').style.display = 'block';
                  }
                "
              >
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

                {/* SIZE ROW */}
                <p className="text-base mb-2.5">[size]</p>
                <div className="flex gap-[15px] ml-[3px]">
                  <p className="text-sm">S</p>
                  <p className="text-sm">M</p>
                  <p className="text-sm">L</p>
                  <p className="text-sm">XL</p>
                  <p className="text-sm">2XL</p>
                </div>

                {/* ADD TO CART */}
                <div className="flex justify-center mt-5 mb-[50px]">
                  <a
                    href="{{ object.get_add_to_cart_url }}"
                    className="show-all bg-[#4f3d74] text-white px-1 py-1"
                  >
                    [add to cart]
                  </a>
                </div>
              </div>

              {/* SIZING */}
              <br/><br/>
              <button
                className="product-button mt-4"
                onclick="
                  if (document.getElementById('sizing-product').style.display == 'block'){
                    document.getElementById('sizing-product').style.display = 'none';
                  } else {
                    document.getElementById('sizing-product').style.display = 'block';
                  }
                "
              >
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
              <br/><br/>
              <button
                className="product-button mt-4"
                onclick="
                  if (document.getElementById('shipping-product').style.display == 'block'){
                    document.getElementById('shipping-product').style.display = 'none';
                  } else {
                    document.getElementById('shipping-product').style.display = 'block';
                  }
                "
              >
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