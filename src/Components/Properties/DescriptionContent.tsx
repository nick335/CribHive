import React from 'react'
import ContactUs from './ContactUs'

const DescriptionContent = () => {
  return (
    <div className='mt-6 w-[90%] mx-auto font-jhengHei lg:flex lg:mt-10 lg:flex-nowrap lg:gap-x-20 xl:gap-x-36'>
     <div className='lg:w-1/2'>
      <h2 className='text-headerPrimary font-bold text-lg lg:text-3xl xl:text-[2rem]'>2 Bedroom Apartment</h2>
      <p className='mt-3 lg:mt-6 lg:text-xl xl:text-2xl text-headerPrimary'><span className='font-bold pr-0.5'>Location:</span> Kolawole Street, off Seven avenue Akoka</p>
      <p className='mt-3 lg:text-xl xl:text-2xl text-headerPrimary'><span className='font-bold pr-0.5'>Rent:</span>100 Thousand Naira per annum</p>
      <h4 className='text-headerPrimary lg:text-xl xl:text-2xl font-bold mt-3'>Description</h4>
      <p className='mt-1 lg:mt-2 xl:mt-4 lg:text-lg text-headerPrimary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi modi iure quidem quo, saepe, sapiente quis sed est recusandae tempore alias error deserunt enim totam numquam molestiae eius porro. Magnam!</p>
     </div>
     <div className='lg:w-1/2'>
      <h3 className='font-inter cursor-pointer lg:w-fit lg:ml-auto px-3 py-[0.4rem] text-xs border border-secondaryBorder rounded-[0.25rem] absolute top-3 right-[5%] lg:static '>Watch Video</h3>
      <ContactUs />
     </div>
    </div>
  )
}

export default DescriptionContent