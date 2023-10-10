'use client'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './properties.module.css'
import React, { useState, useEffect } from 'react'
import Apartment from '../Utility/icons/Apartment'
import Hostel from '../Utility/icons/Hostel'
import { useStore } from '@/store/useFilter'
import { useStore as windowStore } from '@/store/useWindowWidth'
import {motion} from 'framer-motion'
import BedroomsFilter from './BedroomsFilter'
import RoomsFiliter from './RoomsFiliter'

const Filter = () => {
 const {showFilter, toggleFilter, type, setType} = useStore()
 const { windowWidth } = windowStore()

 // disable scroll when showFilter is active  
 useEffect(() => {
  showFilter ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
 }, [showFilter])

  return (
    <motion.div 
      initial={false}
      animate={
        showFilter ? windowWidth >= 1023 ?  {
          display: "block",
          opacity: 1,
          transition: {
            opacity: {
              duration: 0.2,
              delay: 0.1,
            }
          }
        } : {
          display: "block"
        } : windowWidth >= 1023 ? {
          opacity: 0,
          transition: {
            delay: 0.9,
            opacity: {
              duration: 0.1
            }
          },
          transitionEnd: {
            display: 'none'
          }
        } : {
          display: 'none'
        }
      }
    className={` fixed top-[52px] left-0 w-full h-[calc(100vh-51px)] bg-bgPrimary font-jhengHei lg:h-screen lg:top-0  lg:bg-black/20 lg:z-50 pb-6`}>
      <div className={`${ showFilter ? 'lg:animate-slideDown' : 'lg:animate-slideUp' } lg:!z-50 lg:relative lg:min-w-[44rem] lg:h-fit lg:max-w-[44rem] max-h-[calc(100vh-51px)] overflow-y-auto  lg:bg-bgPrimary lg:rounded-3xl lg:py-8 lg:px-[3.3rem] lg:scrollbar-thin lg:scrollbar-track-gray-100 lg:scrollbar-track-rounded-3xl lg:scrollbar-thumb-gray-700 lg:scrollbar-thumb-rounded-3xl`}>
        <div className='flex items-center pl-[0.69rem] pr-[0.88rem] py-[0.68rem] border-b border-primaryBorder lg:px-0'>
        <FontAwesomeIcon icon={faXmark} className='w-6 h-6 text-textSecondary lg:text-headerPrimary cursor-pointer lg:absolute lg: right-4 top-4' onClick={toggleFilter}/>
        <h4 className='ml-6 font-bold text-xl lg:ml-0'>Filter</h4>
        <h4 className='ml-auto font-inter text-base text-textSecondary'>Reset</h4>
        </div>
        <div className='w-[90%] mx-auto lg:w-full'>
          <div className={`${styles.filterSectionDiv} pb-6 lg:pb-4`}>
            <h3 className={`${styles.filterSectionDivHeader}`}>Price</h3>
            <div className='flex  items-center gap-x-6 mt-2'>
              <div className='relative w-full lg:w-fit'>
              <input type='text' className={`${styles.filterInput}`} placeholder='Max' />
              </div>
              <div className='relative w-full lg:w-fit'>
              <input type='text' className={`${styles.filterInput}`} placeholder='Min' />
            </div>
          </div>
          </div>
          <div className={`${styles.filterSectionDiv} pb-[1.84rem] lg:pb-4`}>
          <h3 className={`${styles.filterSectionDivHeader}`}>Type</h3>
          <div className='flex mt-2 gap-3 lg:gap-x-6 flex-wrap'>
            <div className={` ${styles.btnTypeDiv} ${ type === 'Apartment' ? styles.btnFilterDivActive : styles.btnFilterDivDefault}`} onClick={() => setType('Apartment')} >
            Apartment
            <Apartment active={type} />
            </div>
            <div className={`${styles.btnTypeDiv} ${type === 'Hostel' ? styles.btnFilterDivActive : styles.btnFilterDivDefault} `} onClick={() => setType('Hostel')}>
            Hostel
            <Hostel active={type}/>
            </div>
            <div className={`!w-[20%] ${styles.btnTypeDiv} !w-[20%] ${type === 'All' ? styles.btnFilterDivActive : styles.btnFilterDivDefault} `}  onClick={() => setType('All')}>
              All
            </div>
          </div>
          </div>
          { type === 'All' || type === 'Apartment' ?   <BedroomsFilter /> : <></> }
          { type === 'All' || type === 'Hostel' ? <RoomsFiliter /> : <></> }
          <button className='btnPrimary mt-8 w-full h-12 rounded-lg '>Continue</button>
        </div>
      </div>  
    </motion.div>
  )
}

export default Filter