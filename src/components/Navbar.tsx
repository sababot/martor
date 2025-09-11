'use client'

import { usePathname } from "next/navigation";
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"

import { useCart } from '@/context/CartContext'

const Navbar = () => {
	const pathname = usePathname();
	const { cart, loading } = useCart()

	const itemCount = cart?.totalQuantity || 0

	return (
		<nav className='hidden md:block sticky z-100 h-12 inset-x-0 top-0 w-full border-b border-gray-200 bg-white backdrop-blur-lg transition-all' style={{ fontFamily: 'ubuntu' }}>
			<MaxWidthWrapper>
				<div className='flex h-12 items-center justify-between border-b border-zinc-200'>
					<div className='flex gap-[4vw]'>
						<Link href='/' className='group'>
							<p className={pathname === "/" ? "font-bold before:content-['['] after:content-[']']" : "before:content-['['] after:content-[']'] before:opacity-0 after:opacity-0 group-hover:before:opacity-100 group-hover:after:opacity-100"}>
								home
							</p>
						</Link>

						<Link href='/shop' className='group'>
							<p className={(pathname === "/shop" || pathname.startsWith("/shop/")) ? "font-bold before:content-['['] after:content-[']']" : "before:content-['['] after:content-[']'] before:opacity-0 after:opacity-0 group-hover:before:opacity-100 group-hover:after:opacity-100"}>
								shop
							</p>
						</Link>

						<Link href='/collections' className='group'>
							<p className={(pathname === "/collections" || pathname.startsWith("/collections/")) ? "font-bold before:content-['['] after:content-[']']" : "before:content-['['] after:content-[']'] before:opacity-0 after:opacity-0 group-hover:before:opacity-100 group-hover:after:opacity-100"}>
								collections
							</p>
						</Link>
					</div>

					<Link href='/' className='absolute left-1/2 -translate-x-1/2'>
						<img src="/images/logo-6-remastered-2.png" className='w-30' />
					</Link>

					<div className='flex gap-[4vw]'>
						<Link href='/about' className='group'>
							<p className={pathname === "/about" ? "font-bold before:content-['['] after:content-[']']" : "before:content-['['] after:content-[']'] before:opacity-0 after:opacity-0 group-hover:before:opacity-100 group-hover:after:opacity-100"}>
								about
							</p>
						</Link>

						<Link href='/contact' className='group'>
							<p className={pathname === "/contact" ? "font-bold before:content-['['] after:content-[']']" : "before:content-['['] after:content-[']'] before:opacity-0 after:opacity-0 group-hover:before:opacity-100 group-hover:after:opacity-100"}>
								contact
							</p>
						</Link>

						<Link href='/cart' className='group'>
							<p className={pathname === "/cart" ? "font-bold before:content-['['] after:content-[']']" : "before:content-['['] after:content-[']'] before:opacity-0 after:opacity-0 group-hover:before:opacity-100 group-hover:after:opacity-100"}>
								cart({itemCount})
							</p>
						</Link>
					</div>

				</div>
			</MaxWidthWrapper>
		</nav>
	)
}

export default Navbar