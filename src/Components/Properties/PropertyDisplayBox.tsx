import React from 'react'
import ResponsiveImage from '../Utility/ResponsiveImage'
import styles from './properties.module.css'
import demoImg from '../../../public/images/home/demo.png'
import { useRouter } from 'next/navigation'

const PropertyDisplayBox = () => {
  const router = useRouter()

  //just for demo
  //redirect to the property description page

  function toPropertyDescription(){
    router.push('/properties/description')
  }

  return (
   <div className='w-full max-w-[21.3125rem] sm:min-w-[17rem] sm:w-[48%]  md:max-w-[22.5rem] mdx:w-[31%] mdx:min-w-[16rem] mdx:max-w-[19rem]  lg:w-[calc(33.3%-1rem)] lg:max-w-[21.3125rem] xl:w-[calc(25%-1.125rem)] 3xl:w-[calc(20%-1.2rem)] 3xl:max-w-[22.3rem]' onClick={toPropertyDescription} >
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

export default PropertyDisplayBox