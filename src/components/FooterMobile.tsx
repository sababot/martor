import Link from "next/link"

const FooterMobile = () => {
	return (
		<div className='block sm:hidden bg-accent w-full px-6 pt-4 h-auto' style={{fontFamily: 'ubuntu'}}>
			<div className='flex justify-between'>
				<div className='inline-block'>
					<a href="" className='text-sm text-center text-white'>privacy policy</a><br/>
					<a href="" className='text-sm text-center text-white'>info</a><br/>
					<a href="" className='text-sm text-center text-white'>return & exchanges</a><br/>
				</div>
				<div className='inline-block'>
					<a href="" className='text-sm text-center text-white'>terms & conditions</a><br/>
					<a href="" className='text-sm text-center text-white'>faq</a><br/>
					<a href="" className='text-sm text-center text-white'>shipping policy</a><br/>
				</div>
			</div>
			<div className='mt-8 pb-4 flex justify-center gap-5'>
				<input type="text" placeholder='email@domain.com' className='pl-1 w-full text-white text-sm border-l-gray border-1 leading-2 outline-0' />
				<button className='text-white text-sm hover:bold'>[subscribe]</button>
			</div>
		</div>
	)
}

export default FooterMobile