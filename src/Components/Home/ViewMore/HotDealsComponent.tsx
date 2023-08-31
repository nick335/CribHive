import ResponsiveImage from '@/Components/Utility/ResponsiveImage'
import demoImg from '../../../../public/images/home/demo.png'
import styles from './viewmore.module.css'
import React from 'react'
import Link from 'next/link'

const HotDealsComponent = () => {
  return (
    <div className=' w-[15.5625rem] lg:shadow-box lg:w-[23.5%] lg:max-w-[273px] '>
      <Link href='/properties/description'>
        <ResponsiveImage 
          url={demoImg}
          alt='apartment'
          style={styles.apartmentImgSize}
          addons={styles.apartmentAddon}
        />
        <div className='bg-bgSecondary px-2 py-7 shadow-boxContent text-textSecondary font-inter font-normal'>
          <h3 className='text-[1.0625rem]'>2 Bedroom Apartment</h3>
          <p className='mt-2 text-sm'>Kolawole Street, Off seven avenue, Akoka</p>
          <div className='flex items-center justify-between mt-2 text-sm'>
            <h5>Status: For Rent</h5>
            <h6 className='text-xs'>$150,000</h6>
          </div>
        </div>
      </Link>        
      </div>
  )
}

export default HotDealsComponent