'use client'
import React from 'react'
import styles from './properties.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import PropertyDisplayBox from './PropertyDisplayBox'
import Filter from './Filter'
import { LuFilter } from 'react-icons/lu'
import { useStore } from '@/store/useFilter'

const Properties = () => {
  const { toggleFilter } = useStore()
  return (
    <>
    <section className=' lg:relative max-w-[620px] mx-auto lg:w-full lg:max-w-none'>
     <div className=' lg:absolute lg:min-w-[31.25rem] lg:max-w-[31.25rem] lg:top-2/4 lg:-translate-y-[50%] lg:left-2/4  lg:-translate-x-[50%]'>
      <div className='relative '>
       <input type='text'  placeholder='Location e.g Yaba' className={`${styles.input}`} />
       <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5 h-5 absolute top-2/4 -translate-y-2/4 right-4 text-headerPrimary'/>
      </div>
     </div>
     <div className='mt-2 flex w-full h-11 px-4 lg:px-10 rounded-lg lg:pr-24 justify-between items-center bg-bgSecondary text-textSecondary lg:h-16 lg:max-w-[70rem] lg:mx-auto'>
      <h3>Apartments <span className='mx-2'>/</span> Hostels</h3>
      <h3 className='flex items-center cursor-pointer lg:border lg:border-primaryBorder lg:px-4  lg:py-2 rounded-xl' onClick={toggleFilter}>Filter
       <span className='ml-2'>
        <LuFilter color="#E0BC84" />
       </span>
      </h3>
     </div>
    </section>
    <section className='mt-4 lg:mt-6 w-fit'>
     <h3 className='font-bold font-jhengHei text-headerPrimary lg:text-2xl'>Apartments</h3>
     <div className='mt-3  lg:mt-[0.88rem] flex flex-wrap gap-5 justify-center md:justify-between  lg:justify-items-start lg:justify-evenly lg:gap-x-6 lg:gap-y-8'>
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
     </div>
    </section>
    <section className='mt-6'>
     <h3 className='font-bold font-jhengHei'>Hostels</h3>
     <div className='mt-3  lg:mt-[0.88rem] flex flex-wrap gap-5 justify-center md:justify-between  lg:justify-items-start lg:justify-between lg:gap-y-8'>
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
      <PropertyDisplayBox />
     </div>
    </section>
    <Filter />
    </>
  )
}

export default Properties