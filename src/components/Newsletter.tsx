import Link from "next/link"

const Newsletter = () => {
	return (
		<div className='hidden sm:flex w-full items-center justify-center' style={{fontFamily: 'ubuntu'}}>
			<div className='w-160'>
				<div className='flex items-center justify-center'>
		            <p className='bg-accent text-white px-2 leading-5'>stay updated</p>
		        </div>
		        <div className='mt-8'>
		        	<p className='text-center'>Form a part of Martor and stay updated with all news revolving Martor. Be the first to find out about discounts and giveaways</p>
		        	<div className='mt-5 mx-15 pb-2 flex justify-center gap-5'>
						<input type="text" placeholder='email@domain.com' className='pl-1 w-full border-stone-400 border-2 leading-2 outline-0' />
						<button className='hover:font-semibold'>[subscribe]</button>
					</div>
					<p className='text-center text-sm'>(you can opt out anytime)</p>
	        	</div>
        	</div>
        </div>
	)
}

export default Newsletter