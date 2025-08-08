import { useState } from "react";
import Link from "next/link"

const Navbar = () => {
	const pathname = usePathname();

	return (
		<nav className='hidden md:block sticky z-100 h-12 inset-x-0 top-0 w-full border-b border-gray-200 bg-white backdrop-blur-lg transition-all' style={{fontFamily: 'ubuntu'}}>
			
		</nav>
	)
}

export default Navbar