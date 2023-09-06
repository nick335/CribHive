'use client'
import React from 'react'
import HotDealsComponent from './HotDealsComponent'
import Link from 'next/link'


const ViewMore = () => {
  return (
    <section className='mt-8 lg:mt-[4.5rem]'>
     <div className='ml-6 flex gap-x-8 overflow-scroll pr-6 scrollbar-hide  lg:pr-0 lg:w-[90%] lg:gap-x-[2%] lg:justify-center  lg:ml-auto lg:mr-auto pb-6'>
      <HotDealsComponent />
      <HotDealsComponent />
      <HotDealsComponent />
      <HotDealsComponent />
     </div>
     <button className='btnPrimary h-10 w-36 rounded-lg mx-auto flex items-center justify-center' >
      <Link href='/properties'>
        View More      
      </Link>
      </button>
    </section>
  )
}

export default ViewMore