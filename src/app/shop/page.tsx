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
        {/* separator */}
        <div className='my-8'></div>

        {/* shop */}
        <section>
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
                <div className='w-3 h-3 bg-purple-300 border-1 border-black border-solid'></div>
              </div>
            </div>

            <div>
              <img src="/images/collections/1/compressed/classic-hoodie-grey-front.png" alt="shirt-1" />
              <p className='text-center'>Classic Hoodie Grey</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€19.99</p>
                <div className='w-3 h-3 bg-purple-300 border-1 border-black border-solid'></div>
              </div>
            </div>

            <div>
              <img src="/images/collections/1/compressed/classic-hoodie-black-front.png" alt="shirt-1" />
              <p className='text-center'>Classic Hoodie Black</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€19.99</p>
                <div className='w-3 h-3 bg-purple-300 border-1 border-black border-solid'></div>
              </div>
            </div>

            <div>
              <img src="/images/collections/1/compressed/delusion-shirt-magenta-back.png" alt="shirt-1" />
              <p className='text-center'>Delusion Shirt Magenta</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€19.99</p>
                <div className='w-3 h-3 bg-purple-300 border-1 border-black border-solid'></div>
              </div>
            </div>

            <div>
              <img src="/images/collections/1/compressed/old-man-shirt-black-front.png" alt="shirt-1" />
              <p className='text-center'>Old Man Shirt Black</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€19.99</p>
                <div className='w-3 h-3 bg-purple-300 border-1 border-black border-solid'></div>
              </div>
            </div>

            <div>
              <img src="/images/collections/1/compressed/old-man-shirt-white-front.png" alt="shirt-1" />
              <p className='text-center'>Old Man Shirt White</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€19.99</p>
                <div className='w-3 h-3 bg-purple-300 border-1 border-black border-solid'></div>
              </div>
            </div>

            <div>
              <img src="/images/collections/1/compressed/old-man-cap-green-front.png" alt="shirt-1" />
              <p className='text-center'>Old Man Cap Green</p>
              <div className='flex justify-center gap-3'>
                <p className='text-gray-500 text-sm leading-3'>€19.99</p>
                <div className='w-3 h-3 bg-purple-300 border-1 border-black border-solid'></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}