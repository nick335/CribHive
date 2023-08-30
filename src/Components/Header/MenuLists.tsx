"use client"
import React, { useState } from 'react'
import styles from './header.module.css'
import { useStore } from '@/store/useMenuBar'
import { useStore as usestore } from '@/store/useWindowWidth'
import { useRouter, usePathname } from 'next/navigation'

const MenuLists = () => {
 const router = useRouter()
 const pathname = usePathname()
 let HTU: HTMLElement | null = null
 if(typeof document !== 'undefined'){
  HTU = document.getElementById('HTU')
 }
 const {isOpen, toggleMenu }= useStore()
 const windowWidth = usestore((state) => state.windowWidth)

 function toApartmentsPage(){
  // detecting window width
  if(windowWidth >= 1024){
    // just navigate to properties page
    router.push('/properties')
  }else{
    // close toggle menu
    toggleMenu()
    //then navigate to properties page
    router.push('/properties')
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

 function toAddaPropertyPage(){
  // detecting window width
  if(windowWidth >= 1024){
    // just navigate to properties page
    router.push('/addaproperty')
  }else{
    // close toggle menu
    toggleMenu()
    //then navigate to properties page
    router.push('/addaproperty')
  }
 }

  return (
   <div className={`absolute lg:static  lg:bg-transparent left-0 bg-bgPrimary w-full h-fit top-[52px] lg:w-fit  font-jhengHei ${isOpen ? 'block' : 'hidden lg:block'} lg:block z-50`}>
    <ul className='w-[86%] mx-auto py-2.5 lg:py-0 lg:w-fit lg:flex lg:mx-0 lg:gap-x-5 xl:gap-x-11 '>
     <li className={`${styles.li} justify-between`} onClick={toAddaPropertyPage}>
        Add A Property    
     </li>
     <li className={`${styles.li}`} onClick={toApartmentsPage} >
       Our Apartments
     </li>
     <li className={`${styles.li} border-0`} onClick={ScrollToHowToUseCribHive} >How to use Cribhive</li>
    </ul>
   </div> 
  )
}

export default MenuLists