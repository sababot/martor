import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from "next/image";
import { Check, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb32 lg:gap-x-0  xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                <img src='/logo-6-instagram.png' className='w-full'/>
              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gra-900 text-5xl md:text-6xl lg:text-7xl'>
                Your Image on a <span className='bg-purple-600 px-2 text-white'>Custom</span> Phone Case
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                Capture your  favorite memories with your own, <span className='font-semibold'>one-of-one</span> phone case. CaseCobra allows you to protect your memories, not just your phone case.
              </p>

              <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                <div className='spcae-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-purple-600' />
                    High-quality, durable material
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-purple-600' />
                    5 year guarantee
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-purple-600' />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                  src='/purple-square.jpg'
                  alt='user Image'
                  />
                  <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                  src='/purple-square.jpg'
                  alt='user Image'
                  />
                  <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                  src='/purple-square.jpg'
                  alt='user Image'
                  />
                  <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                  src='/purple-square.jpg'
                  alt='user Image'
                  />
                  <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                  src='/purple-square.jpg'
                  alt='user Image'
                  />
                </div>

                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-purple-600 fill-purple-600' />
                    <Star className='h-4 w-4 text-purple-600 fill-purple-600' />
                    <Star className='h-4 w-4 text-purple-600 fill-purple-600' />
                    <Star className='h-4 w-4 text-purple-600 fill-purple-600' />
                    <Star className='h-4 w-4 text-purple-600 fill-purple-600' />
                  </div>

                  <p><span className='font-semibold'>1.250</span> happy customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20'>
            <div className='relative md:max-w-xl'>
              <img src="/purple-square.jpg" className='absolute w-40 lg:-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block' />
              <img src="/purple-square.jpg" className='absolute w-20 -left-6 -bottom-6 select-none' />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}