'use client'
import React from 'react'
import MobileSlider from './MobileSlider'
import { useStore } from '@/store/useWindowWidth'
import DesktopSlider from './DesktopSlider'

const DescriptionImage = () => {
  const  { windowWidth }  = useStore()
  return (
    <div className=''>
      { windowWidth >= 1024 ? <DesktopSlider /> : <MobileSlider />}
    </div>
  )
}

export default DescriptionImage