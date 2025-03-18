import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Separator from '@/components/Separator'
import Image from "next/image";
import { Check, Star } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      
      <div style={{fontFamily: 'Ubuntu Mono'}}>
        {/* landing image */}
        <section>
          <img src="/images/sample/sample-3.webp" alt="asdf" className='hidden md:block' />
          <img src="/images/sample/sample-3-mobile.webp" alt="asdf" className='block md:hidden' />
        </section>

        {/* separator */}
        <Separator/>

        {/* new arrivals */}
        <section>
          <div className='flex items-center justify-center'>
            <p className='bg-accent text-white px-2 leading-5'>new arrivals</p>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 md:gap-6 px-2 md:px-4 pt-4 mt-2 md:mt-4'>
            <div>
              <img src="/images/collections/1/compressed/classic-shirt-magenta-front.png" alt="shirt-1" />
              <p className='text-center'>Classic Shirt Magenta</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€19.99</p>
                <div className='w-3 h-3 bg-purple-300 border-1 border-black border-solid'></div>
              </div>
            </div>

            <div>
              <img src="/images/collections/1/compressed/classic-shirt-blue-front.png" alt="shirt-1" />
              <p className='text-center'>Classic Shirt Blue</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€19.99</p>
                <div className='w-3 h-3 bg-blue-200 border-1 border-black border-solid'></div>
              </div>
            </div>

            <div>
              <img src="/images/collections/1/compressed/old-man-shirt-black-front.png" alt="shirt-1" />
              <p className='text-center'>Old Man Shirt Black</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€19.99</p>
                <div className='w-3 h-3 bg-black border-1 border-black border-solid'></div>
              </div>
            </div>

            <div>
              <img src="/images/collections/1/compressed/old-man-shirt-white-front.png" alt="shirt-1" />
              <p className='text-center'>Old Man Shirt White</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€19.99</p>
                <div className='w-3 h-3 bg-white border-1 border-black border-solid'></div>
              </div>
            </div>

            <div>
              <img src="/images/collections/1/compressed/delusion-shirt-magenta-back.png" alt="shirt-1" />
              <p className='text-center'>Delusion Shirt Magenta</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€19.99</p>
                <div className='w-3 h-3 bg-purple-900 border-1 border-black border-solid'></div>
              </div>
            </div>

            <div>
              <img src="/images/collections/misc/logo-exp-shirt-2-front.png" alt="shirt-1" />
              <p className='text-center'>Lens Shirt Red</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€19.99</p>
                <div className='w-3 h-3 bg-red-900 border-1 border-black border-solid'></div>
              </div>
            </div>

             <div>
              <img src="/images/collections/1/compressed/classic-hoodie-grey-front.png" alt="shirt-1" />
              <p className='text-center'>Classic Hoodie Magenta</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€24.99</p>
                <div className='w-3 h-3 bg-purple-300 border-1 border-black border-solid'></div>
              </div>
            </div>

            <div>
              <img src="/images/collections/1/compressed/old-man-cap-green-front.png" alt="shirt-1" />
              <p className='text-center'>Old Man Cap Green</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€8.99</p>
                <div className='w-3 h-3 bg-green-800 border-1 border-black border-solid'></div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center mt-6'>
            <button className='hover:font-semibold hover:font-'>[show all]</button>
          </div>
        </section>

        {/* separator */}
        <Separator/>

        {/* premiere */}
        <section>
          <div className='flex items-center justify-center'>
            <p className='bg-accent text-white px-2 leading-5'>premiere</p>
          </div>
          <div className='flex justify-center mt-10'>
            <iframe className='ml-0 mr-0 w-[90vw] sm:w-[75vw] lg:w-[55vw] h-[50vw] sm:h-[40vw] lg:h-[30vw] mb-4 block' src="https://www.youtube.com/embed/QU_VVFLTgJY">
            </iframe>
          </div>
          <div className='flex items-center justify-center mt-1 sm:mt-3 md:mt-4'>
            <button className='hover:font-semibold hover:font-'>[view channel]</button>
          </div>
        </section>

        {/* separator */}
        <Separator/>

        {/* lookbook */}
        <section>
          <div className='flex items-center justify-center'>
            <p className='bg-accent text-white px-2 leading-5'>lookbook</p>
          </div>
          <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 gap-3 px-2 md:px-16 pt-4 mt-2 md:mt-4'>
            <img src="/images/lookbook/compressed/post-7.png" alt="lookbook-1" />
            <img src="/images/lookbook/compressed/post-3.png" alt="lookbook-1" />
            <img src="/images/lookbook/compressed/post-9.jpg" alt="lookbook-1" />
            <img src="/images/lookbook/compressed/post-10.jpeg" alt="lookbook-1" />
            <img src="/images/lookbook/compressed/post-13.jpg" alt="lookbook-1" />
            <img src="/images/lookbook/compressed/post-16.jpg" alt="lookbook-1" />
            <img src="/images/lookbook/compressed/post-15.jpg" alt="lookbook-1" />
            <img src="/images/lookbook/compressed/post-14.jpg" alt="lookbook-1" />
            <img src="/images/lookbook/compressed/post-6.png" alt="lookbook-1" className='block md:hidden xl:block' />
            <img src="/images/lookbook/compressed/post-1.png" alt="lookbook-1" className='hidden xl:block' />
          </div>
        </section>
      </div>
    </div>
  );
}