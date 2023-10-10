'use client'
import React from 'react'
import DotControl from './DotControl'
import ArrowControls from './ArrowControls'
import { StaticImageData } from 'next/image'
import ResponsiveImage from '../Utility/ResponsiveImage'
import styles from './properties.module.css'

interface props {
  images: string[] | StaticImageData[]
}

const MobileSlider = ({images}: props) => {
  const [index, setIndex] = React.useState(0)


  function changeIndex(idx: number){
    setIndex(idx)
  }
  const dotControls = images.map((each, idx) => {
    return <DotControl 
              key={idx}
              idx={idx}
              activeIdx={index}
              changeIndex={changeIndex}
            />
  })

  const slidingImages = images.map((each, idx) => {
    // const url = URL.createObjectURL(each)
    return <ResponsiveImage 
              key={idx}
              alt='slidingImages'
              url={each}
              style={styles.mobileSlidingImages}
              addons={styles.mobileSlidingImagesAddons}
           />
  })

  function slideRight (){
    setIndex((prev) => prev + 1)
  }

  function slideLeft (){
    setIndex((prev) => prev - 1 )
  }

  return (
    <div className='w-full relative'>
      <div className='max-w-[100%] overflow-hidden'>
        <div className='whitespace-nowrap transition-all ease-linear duration-500' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {slidingImages}
        </div>
      </div>

    <div className='flex gap-x-2 absolute bottom-3 left-2/4 -translate-x-2/4'>
      { dotControls }
    </div>
    <ArrowControls 
      slideLeft={slideLeft}
      slideRight={slideRight}
      activeIdx={index}
      Arraylength={images.length}
    />
    </div>
  )
}

export default MobileSlider