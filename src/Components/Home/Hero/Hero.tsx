import React from 'react'

const Hero = () => {
  return (
    <section className='mt-10 mx-6 font-jhengHei lg:mt-20 lg:mx-0'>
     <h2 className='text-center text-black text-xl font-bold md:text-2xl lg:text-5xl lg:px-2'>Unlock the Door to your Dream <span className='text-textSecondary font-jhengHei'>Accommodation!</span></h2>
     <p className='mt-3 text-center text-textPrimary text-sm leading-6 mx-auto px-1 max-w-[400px] md:max-w-[500px] md:px-0 lg:mt-5 lg:text-2xl lg:max-w-[881px] font-jhengHei'>CribHive is the solution to finding apartments and hostels both on and off the campus and locations around the campus </p>

     <div className='font-jhengHei mt-4 flex gap-x-3 sm:max-w-lg sm:mx-auto lg:mt-10 lg:max-w-[786px] lg:gap-x-4'>
      <input type='text' placeholder='Location e.g Yaba' className='w-full rounded-lg border border-headerPrimary bg-transparent pl-4 pr-3 placeholder-textPrimary/70 lg:rounded-xl lg:placeholder:text-xl' />
      <button className='btnPrimary min-w-[6.8125rem] h-10 hover:bg-btnhover rounded-lg text-sm lg:h-16 lg:min-w-[9rem] lg:rounded-xl lg:text-2xl'>Search</button>
     </div>
    </section>
  )
}

export default Hero