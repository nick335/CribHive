'use client'
import { faHome, faHotel, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styles from './addproperty.module.css'
import Apartment from '../Utility/icons/Apartment'
import Hostel from '../Utility/icons/Hostel'

const AddPropertyForm = () => {
 let [isApartment, setIsApartment] = useState(true)

 function setIsApartmentTrue(){
  setIsApartment(true)
 }
 function setIsApartmentFalse(){
  setIsApartment(false)
 }
  return (
    <div className='mt-9'>
     <div className='flex gap-x-3 justify-center items-center'>
      <div className={`${styles.btnDiv} ${isApartment ? styles.btnDivActive : styles.btnDivDefault}`} onClick={setIsApartmentTrue} >
       Apartment
       <Apartment active={isApartment} />
      </div>
      <div className={`${styles.btnDiv} ${!isApartment ? styles.btnDivActive : styles.btnDivDefault} `} onClick={setIsApartmentFalse}>
       Hostel
       {/* passing the inverse of isApartment state because that represents the hostel state */}
       <Hostel active={!isApartment} />
      </div>
     </div>
     <form>
     <div className={`${styles.inputGap}`}>
       <input className={`${styles.input}`} type='text' placeholder=' Address' />
      </div>
      <div className={`flex  items-center gap-x-6 ${styles.inputGap}`}>
       <div className='w-full'>
        <input type='text' className={`${styles.input}`} placeholder='Rent' />
       </div>
       <div className='w-full'>
        <input type='text' className={`${styles.input}`} placeholder='Bedroom(s)' />
       </div>
      </div>
      <div className={`relative ${styles.inputGap}`}>
        <textarea placeholder='Property Description' className={`min-h-[5.875rem] pt-3 ${styles.input}`} />
      </div>
      <div className={`w-full flex justify-between px-4 h-12 bg-transparent border border-black cursor-pointer items-center rounded-lg ${styles.inputGap}`}>
        <input type='file' className='hidden' />
        <p>Pictures(Videos are optional)</p>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <button className={`btnPrimary mt-8 ${styles.formBtn}`}>Post</button>
     </form>
    </div>
  )
}

export default AddPropertyForm