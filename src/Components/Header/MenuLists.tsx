"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './header.module.css'
import { useStore } from '@/store/useMenuBar'
import arrow from '../../../public/images/utility/arrow.svg'
import ResponsiveImage from '../Utility/ResponsiveImage'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const MenuLists = () => {
 const isOpen = useStore((state) => state.isOpen)
 const [dropdown, setDropDown] = useState(false)

 function toggleDropDown(){
  setDropDown(prev => !prev)
 }

  return (
   <div className={`absolute lg:static  lg:bg-transparent left-0 bg-bgPrimary w-full h-fit top-[52px] lg:w-fit  font-jhengHei ${isOpen ? 'block' : 'hidden lg:block'} lg:block z-50`}>
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
     <motion.ul 
      initial={false}
      animate = {
        dropdown ? {
          height: 'auto',
          opacity: 1,
          display: "block",
          transition: {
            height: {
              duration: 0.4
            },
            opacity: {
              duration: 0.25,
              delay: 0.15
            }
          }
        } : {
          height: 0,
          opacity: 0,
          transition: {
            height: {
              duration: 0.4,
            },
            opacity: {
              duration: 0.25
            }
          },
          transitionEnd: {
            display: 'none'
          }
        }
      }
     className='pl-9 lg:hidden'
     >
      <li className={`${styles.li} origin-center `}>
        <Link href='/login' >
          Login
        </Link>
      </li>
      <li className={`${styles.li} origin-center`}>
        <Link href='/register' >
         Register
        </Link>
      </li>
     </motion.ul>
     <li className={`${styles.li}`}  >
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