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

const Filter = () => {
 const {showFilter, toggleFilter} = useStore()
 const { windowWidth } = windowStore()
 const [isApartmentActive, setApartmentActive] = useState(false)
 const [isHostelActive, setHostelActive] = useState(false)

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
    className={` absolute top-[52px] left-0 w-full h-[calc(100vh-51px)] bg-bgPrimary font-jhengHei lg:h-screen lg:top-0  lg:bg-black/20 `}>
      <div className={`${ showFilter ? 'lg:animate-slideDown' : 'lg:animate-slideUp' }  lg:relative lg:min-w-[44rem] lg:h-fit lg:max-w-[44rem] lg:bg-bgPrimary lg:rounded-3xl lg:py-8 lg:px-[3.3rem] `}>
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
          <div className='flex mt-2 gap-x-3 lg:gap-x-6'>
            <div className={` ${styles.btnFilterDiv} ${isApartmentActive ? styles.btnFilterDivActive : styles.btnFilterDivDefault}`} onClick={() => setApartmentActive((prev) => !prev)} >
            Apartment
            <Apartment active={isApartmentActive} />
            </div>
            <div className={`${styles.btnFilterDiv} ${isHostelActive ? styles.btnFilterDivActive : styles.btnFilterDivDefault} `} onClick={() => setHostelActive((prev) => !prev)}>
            Hostel
            <Hostel active={isHostelActive}/>
            </div>
          </div>
          </div>
          <div className={`${styles.filterSectionDiv} pb-8 lg:pb-[1.56rem]`}>
          <h3 className={`${styles.filterSectionDivHeader}`}>Bedroom</h3>
          <div className={`${styles.radioDiv}`} >
            <div className={`${styles.FilterRadioBtn}`}></div>
            <h5>1 Bedroom</h5>
          </div>
          <div className={`${styles.radioDiv}`} >
            <div className={`${styles.FilterRadioBtn}`}></div>
            <h5>2 Bedroom</h5>
          </div>
          <div className={`${styles.radioDiv}`} >
            <div className={`${styles.FilterRadioBtn}`}></div>
            <h5>3 Bedroom</h5>
          </div>
          </div>
          <button className='btnPrimary mt-8 w-full h-12 rounded-lg '>Continue</button>
        </div>
      </div>  
    </motion.div>
  )
}

export default Filter