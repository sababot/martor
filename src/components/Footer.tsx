import Link from "next/link"

const Footer = () => {
	return (
		<div className='hidden sm:flex justify-between bg-accent w-full px-6 text-sm' style={{fontFamily: 'Ubuntu Mono'}}>
			<a href="" className='text-white'>info</a>
			<a href="" className='text-white'>return & exchanges</a>
			<a href="" className='text-white'>privacy policy</a>
			<a href="" className='text-white'>shipping policy</a>
			<a href="" className='text-white'>faqs</a>
			<a href="" className='text-white'>terms & conditions</a>
		</div>
	)
}

export default Footer