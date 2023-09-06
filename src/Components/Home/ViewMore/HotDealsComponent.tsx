import ResponsiveImage from '@/Components/Utility/ResponsiveImage'
import demoImg from '../../../../public/images/home/demo.png'
import styles from './viewmore.module.css'
import React from 'react'
import Link from 'next/link'

const HotDealsComponent = () => {
  return (
    <div className=' w-[16.4375rem] lg:shadow-box lg:w-[23.5%] lg:max-w-[19.375rem] shadow-boxContent lg:rounded-b-lg'>
      <Link href='/properties/description'>
        <ResponsiveImage 
          url={demoImg}
          alt='apartment'
          style={styles.apartmentImgSize}
          addons={styles.apartmentAddon}
        />
        <div className='bg-bgSecondary px-[0.81rem] pt-[1.69rem] pb-[1.56rem] lg:pt-[1.19rem] lg:pb-[1.19rem] lg:px-4 shadow-boxContent text-textSecondary font-inter font-normal lg:rounded-b-lg '>
          <h3 className='text-[1.0625rem] lg:text-base'>2 Bedroom Apartment</h3>
          <p className='mt-2 text-sm lg:mt-3'>Kolawole Street, Off seven avenue, Akoka</p>
          <div className='flex items-center justify-between mt-2 text-sm lg:justify-start lg:gap-x-[3.6rem] lg:mt-3 '>
            <h5>Status: For Rent</h5>
            <h6 className='text-sm'><span>$</span>150,000</h6>
          </div>
        </div>
      </Link>        
      </div>
  )
}

export default HotDealsComponent