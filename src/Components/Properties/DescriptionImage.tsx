'use client'
import React from 'react'
import MobileSlider from './MobileSlider'
import { StaticImageData } from 'next/image'
import { useStore } from '@/store/useWindowWidth'
import DesktopSlider from './DesktopSlider'

interface props {
  images: string[] | StaticImageData[]
}

const DescriptionImage = ({ images }: props) => {
  const  { windowWidth }  = useStore()
  return (
    <div className=''>
      { windowWidth >= 1024 ? <DesktopSlider images={images} /> : <MobileSlider images={images} />}
    </div>
  )
}

export default DescriptionImage