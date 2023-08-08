"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './header.module.css'
import { useStore } from '@/store/useMenuBar'
import arrow from '../../../public/images/utility/arrow.svg'
import ResponsiveImage from '../Utility/ResponsiveImage'

const MenuLists = () => {
 const isOpen = useStore((state) => state.isOpen)
 const [dropdown, setDropDown] = useState(false)

 function toggleDropDown(){
  setDropDown(prev => !prev)
 }

  return (
   <div className={`absolute lg:static  lg:bg-transparent left-0 bg-bgPrimary w-full h-fit top-[52px] lg:w-fit  font-jhengHei ${isOpen ? 'block' : 'hidden lg:block'} lg:block`}>
    <ul className='w-[86%] mx-auto py-2.5 lg:py-0 lg:w-fit lg:flex lg:mx-0 lg:gap-x-5 xl:gap-x-11 '>
     <li className={`${styles.li} justify-between`}>
      Add A Property
      <div className='w-fit h-fit bg-white lg:hidden' onClick={toggleDropDown}>
       <ResponsiveImage 
        url={arrow}
        style={`${styles.arrow} ${dropdown ? styles.arrowRotate : 'rotate-0'}`}
        alt='arrow image'
        addons=' '
       />
      </div>
     </li>
     <ul className='pl-9 lg:hidden'>
      <li className={`${styles.li} origin-center  ${dropdown ? 'animate-appear' : ' animate-disappear animation-delay-200'}`}>Login</li>
      <li className={`${styles.li} origin-center opacity-0  ${dropdown ? 'animate-appear animation-delay-300' : 'animate-disappear'}`}>Register</li>
     </ul>
     <li className={`${styles.li}`}>
      <Link href={'/'}>
       Our Apartments
      </Link>
     </li>
     <li className={`${styles.li} border-0`}>How to use Cribhive</li>
    </ul>
   </div> 
  )
}

export default MenuLists