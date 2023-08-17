import React from 'react'
import demoImg from '../../../public/images/home/demo.png'
import ResponsiveImage from '../Utility/ResponsiveImage'
import styles from './properties.module.css'

const ApartmentBox = () => {
  return (
    <div className='w-full max-w-[21.3125rem] lg:max-w-[18.375rem] xl:max-w-[15.375rem]'>
     <ResponsiveImage 
      url={demoImg}
      alt='apartment_Img'
      style={styles.apartmentImgSize}
      addons={styles.apartmentAddon}
     />
     <div className='bg-bgSecondary px-[1.81rem] py-7 shadow-apartmentBox text-textSecondary font-inter font-normal rounded-b-md lg:py-[1.19rem] lg:px-4'>
      <h3 className='text-[1.0625rem]'>2 Bedroom Apartment</h3>
      <p className='mt-2 text-sm'>Kolawole Street, Off seven avenue, Akoka</p>
      <div className='flex items-center justify-between mt-2 text-sm'>
        <h5>Status: For Rent</h5>
        <h6 className='text-xs'>$150,000</h6>
      </div>
     </div>
    </div>
  )
}

export default ApartmentBox