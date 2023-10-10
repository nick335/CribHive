"use client"
import React, { useState } from 'react'
import styles from './header.module.css'
import { useStore } from '@/store/useMenuBar'
import { useStore as usestore } from '@/store/useWindowWidth'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

const MenuLists = () => {
 const router = useRouter()
 const pathname = usePathname()
 let HTU: HTMLElement | null = null
 if(typeof document !== 'undefined'){
  HTU = document.getElementById('HTU')
 }
 const {isOpen, toggleMenu }= useStore()
 const windowWidth = usestore((state) => state.windowWidth)

 function closeMobileMenu(){
  if(windowWidth < 1024){
    toggleMenu()
  }
 }

 function ScrollToHowToUseCribHive(){
  // detecting window width
  if(windowWidth >= 1024){
    // detecting cureent route
    if(pathname === '/'){
      //scroll to section
      HTU?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }else{
      //route to home page
      router.push('/')
      // then scroll to section
      HTU?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }else{
    // close menu
    toggleMenu()
    if(pathname === '/'){
      //scroll to section
      HTU?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }else{
      //route to home page
      router.push('/#HTU')
      // then scroll to section
    }
  }
 }

  return (
   <div className={`absolute border-b-2 border-b-primaryBorder lg:border-b-0 lg:static  lg:bg-transparent left-0 bg-bgPrimary w-full h-fit top-[52px] lg:w-fit  font-jhengHei ${isOpen ? 'block' : 'hidden lg:block'} lg:block z-50 lg:z-[2]`}>
    <ul className='w-[86%] mx-auto pt-3 lg:py-0 lg:w-fit lg:flex lg:mx-0 lg:gap-x-5 xl:gap-x-11 '>
     <li className={`lg:!hidden ${styles.li}`}><Link href='/login' className=''>Login</Link></li>
     <li className={`${styles.li} `} onClick={closeMobileMenu}>
        <Link href='/manageproperties'>Add A Property </Link>  
     </li>
     <li className={`${styles.li}`} onClick={closeMobileMenu} >
      <Link href='/properties' >Our Apartments</Link>
     </li>
     <li className={`!border-b-0 !mb-0 ${styles.li}`} onClick={ScrollToHowToUseCribHive} >How to use Cribhive</li>
    </ul>
   </div> 
  )
}

export default MenuLists