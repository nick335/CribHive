import React, { useState } from 'react'
import ArrowControls from './ArrowControls'
import ResponsiveImage from '../Utility/ResponsiveImage'
import styles from './properties.module.css'
import { StaticImageData } from 'next/image'

interface props {
  images: string[] | StaticImageData[]
}

const DesktopSlider = ({ images }: props) => {
 const [index, setIndex] = useState(0)
 

 const slidingImages = images.map((each) => {
  // const url = URL.createObjectURL(each)
  return <ResponsiveImage 
          url={each}
          alt='slidingImages'
          addons=''
          style={styles.DesktopSlidingImages}
         />
 })

 function RightSlide(){
  setIndex(prevIndex => prevIndex + 1)
 }
 function LeftSlide(){
  setIndex(prevIndex => prevIndex - 1)
 }
  return (
    <div className='max-w-full  overflow-hidden relative'>
     <div className='w-full flex flex-nowrap gap-x-3 whitespace-nowrap transition-all ease-linear duration-500' style={{
      transform : `${
       index === 0 ? `translate3d(0, 0, 0)` : `translate3d(calc(((50% + 0.375rem)* ${-index})), 0, 0)`
      }`
     }}
     >
     {slidingImages}
     </div>
     <ArrowControls 
      activeIdx={index}
      Arraylength={images.length}
      slideLeft={LeftSlide}
      slideRight={RightSlide}
     />
    </div>
  )
}

export default DesktopSlider