'use client'
import { faHome, faHotel, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './properties.module.css'
import React, { useState, useEffect } from 'react'
import Apartment from '../Utility/icons/Apartment'
import Hostel from '../Utility/icons/Hostel'
import { useStore } from '@/store/useFilter'

const Filter = () => {
 const {showFilter, toggleFilter} = useStore()
 const [isApartmentActive, setApartmentActive] = useState(false)
 const [isHostelActive, setHostelActive] = useState(false)

 // disable scroll when showFilter is active  
 useEffect(() => {
  showFilter ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
 }, [showFilter])

  return (
    <div className={` ${ showFilter ? 'block' : 'hidden' } absolute top-[52px] left-0 w-full h-[calc(100vh-51px)] bg-bgPrimary font-jhengHei`}>
     <div className='flex items-center pl-[0.69rem] pr-[0.88rem] py-[0.68rem] border-b border-primaryBorder'>
      <FontAwesomeIcon icon={faXmark} className='w-6 h-6 text-textSecondary cursor-pointer' onClick={toggleFilter}/>
      <h4 className='ml-6 font-bold text-xl'>Filter</h4>
      <h4 className='ml-auto font-inter text-base text-textSecondary'>Reset</h4>
     </div>
     <div className='w-[90%] mx-auto'>
      <div className={`${styles.filterSectionDiv} pb-6`}>
       <h3 className={`${styles.filterSectionDivHeader}`}>Price</h3>
       <div className='flex  items-center gap-x-6 mt-2'>
        <div className='relative w-full'>
         <input type='text' className={`${styles.filterInput}`} placeholder='Max' />
        </div>
        <div className='relative w-full'>
         <input type='text' className={`${styles.filterInput}`} placeholder='Min' />
        </div>
       </div>
      </div>
      <div className={`${styles.filterSectionDiv} pb-[1.84rem]`}>
       <h3 className={`${styles.filterSectionDivHeader}`}>Type</h3>
       <div className='flex mt-2 gap-x-3'>
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
      <div className={`${styles.filterSectionDiv} pb-8`}>
       <h3 className={`${styles.filterSectionDivHeader}`}>Bedroom</h3>
       <div className={`${styles.radioDiv}`} >
        <div className={`${styles.FilterRadioBtn}`}></div>
        <h5>1 Bedroom flat</h5>
       </div>
       <div className={`${styles.radioDiv}`} >
        <div className={`${styles.FilterRadioBtn}`}></div>
        <h5>2 Bedroom flat</h5>
       </div>
       <div className={`${styles.radioDiv}`} >
        <div className={`${styles.FilterRadioBtn}`}></div>
        <h5>3 Bedroom flat</h5>
       </div>
      </div>
      <button className='btnPrimary mt-8 w-full h-12 rounded-lg '>Continue</button>
     </div>
    </div>
  )
}

export default Filter