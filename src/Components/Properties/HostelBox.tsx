import React from 'react'
import demoImg from '../../../public/images/home/demo.png'
import ResponsiveImage from '../Utility/ResponsiveImage'
import styles from './properties.module.css'


const HostelBox = () => {
  return (
    <div className='w-full max-w-[21.3125rem]'>
     <ResponsiveImage 
      url={demoImg}
      alt='Hostel_img'
      style={styles.hostelImgSize}
      addons={styles.hostelAddon}
     />
     <div className='bg-bgSecondary px-[1.06rem] py-[1.31rem] shadow-apartmentBox text-textSecondary font-inter font-normal rounded-b-md'>
      <h3 className='text-[1.0625rem]'>4 man Bedroom </h3>
      <p className='mt-2 text-sm'>Kolawole Street, Off seven avenue, Akoka</p>
      <div className='flex items-center justify-between mt-2 text-sm'>
        <h5>Status: For Rent</h5>
        <h6 className='text-xs'>$150,000</h6>
      </div>
     </div>
    </div>
  )
}

export default HostelBox