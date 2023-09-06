"use client"
import { useStore } from '@/store/useMenuBar'
import React from 'react'
import styles from './header.module.css'

const MenuBar = () => {
const {isOpen, toggleMenu} = useStore()

  return (
    <div className={` lg:ml-0 ml-auto lg:hidden flex flex-col items-center justify-center  h-[35px] w-[35px] rounded-full  cursor-pointer border border-black  ${ isOpen ? ' ' : ''}`} onClick={toggleMenu}>
      <div className= {`${styles.bar} ${isOpen ? 'translate-y-[6px] rotate-45' : ''}`}  ></div>
      <div className={`${styles.bar} ${isOpen ? 'opacity-0' : ''}`}></div>
      <div className={`!mb-0 ${styles.bar} ${isOpen ? 'transform -translate-y-[6px] -rotate-45 ' : '' }`}></div>
    </div>
  )
}

export default MenuBar