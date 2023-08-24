'use client'
import React from 'react'
import MobileSlider from './MobileSlider'
import { useStore } from '@/store/useWindowWidth'

const DescriptionImage = () => {
  const  { windowWidth }  = useStore()
  return (
    <div className=''>
      { windowWidth >= 1024 ? <div className='w-full bg-red-500 h-[27.435]'></div> : <MobileSlider />}
    </div>
  )
}

export default DescriptionImage