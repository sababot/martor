"use client"

import { useState } from "react";
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { AlignJustify, Search, ShoppingCart } from 'lucide-react';

import { useCart } from '@/context/CartContext'

const NavbarMobile = () => {
	const [isOpen, setIsOpen] = useState(true);

	const { cart, loading } = useCart()

	const itemCount = cart?.totalQuantity || 0

	return (
		<div style={{fontFamily: 'ubuntu'}}>
			<div className='block md:hidden h-12 inset-x-0 top-0'>
			</div>

			<nav className='fixed md:hidden z-100 h-12 inset-x-0 top-0 w-full border-b border-gray-200 bg-white backdrop-blur-lg transition-all'>
				<MaxWidthWrapper>
					<div className='flex h-12 items-center justify-between border-b border-zinc-200'>
						<Link href='' className='group'>
							<AlignJustify strokeWidth={2} onClick={() => setIsOpen(!isOpen)}/>
						</Link>

						<Link href='/' className='absolute left-1/2 -translate-x-1/2'>
							<img src="/images/logo-6-remastered-2.png" className='w-30' />
						</Link>

						<div className='flex gap-4'>
							<Link href='/search' className='group'>
								<Search strokeWidth={2} />
							</Link>

							<Link href='/cart' className='flex'>
								<ShoppingCart strokeWidth={2} />
								<span className="align-super text-xs">({itemCount})</span>
							</Link>
						</div>

					</div>
				</MaxWidthWrapper>
			</nav>

			<div className={isOpen ? "-translate-x-full fixed top-0 right-0 w-full h-full transition-all bg-white z-40" : "translate-x-0 fixed top-0 right-0 transition-all w-full h-full bg-white z-40"}>
				<div className='mx-6 mt-20'>
					<div className='flex gap-6 fixed w-full z-2'>
						<div className='flex-1/2'>
							<a href="/shop" className=''>
								<div className='flex justify-start'>
								  	<p className='bg-accent mt-6 px-2 text-white'>shop</p>
								</div>
							</a>
							<a href="/collections">
								<div className='flex justify-start'>
								  	<p className='bg-accent mt-6 px-2 text-white'>collections</p>
								</div>
							</a>
							<a href="/about">
								<div className='flex justify-start'>
								  	<p className='bg-accent mt-6 px-2 text-white'>about</p>
								</div>
							</a>
							<a href="/contact">
								<div className='flex justify-start'>
								  	<p className='bg-accent mt-6 px-2 text-white'>contact</p>
								</div>
							</a>
							<a href="/cart">
								<div className='flex justify-start'>
								  	<p className='bg-accent mt-6 px-2 text-white'>cart</p>
								</div>
							</a>
						</div>
						<div className='flex-1/2'>
							<a href="/shop" className=''>
								<div className='flex justify-start'>
								  	<p className='bg-accent mt-6 px-2 text-white'>all</p>
								</div>
							</a>
							<a href="/collections">
								<div className='flex justify-start'>
								  	<p className='bg-accent mt-6 px-2 text-white'>shirts</p>
								</div>
							</a>
							<a href="/about">
								<div className='flex justify-start'>
								  	<p className='bg-accent mt-6 px-2 text-white'>hoodies</p>
								</div>
							</a>
							<a href="/contact">
								<div className='flex justify-start'>
								  	<p className='bg-accent mt-6 px-2 text-white'>pants</p>
								</div>
							</a>
							<a href="/cart">
								<div className='flex justify-start'>
								  	<p className='bg-accent mt-6 px-2 text-white'>hats</p>
								</div>
							</a>
						</div>
					</div>
					<img src="/images/logo-6-instagram-gey.png" className='fixed bottom-0 w-full m-0 p-0 left-0 z-0' />
				</div>
			</div>
		</div>
	)
}

export default NavbarMobile