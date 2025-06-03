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
          <div className='flex items-center justify-center'>
            <p className='bg-accent text-white px-2 leading-5'>under construction</p>
          </div>
        </section>
      </div>
    </div>
  );
}