import React from 'react'
import styles from './properties.module.css'
import ApartmentBox from './ApartmentBox'
import HostelBox from './HostelBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Properties = () => {
  return (
    <>
    <section className=' lg:relative max-w-[620px] mx-auto lg:w-full lg:max-w-none'>
     <div className=' lg:absolute lg:min-w-[31.25rem] lg:max-w-[31.25rem] lg:top-2/4 lg:-translate-y-[50%] lg:left-2/4  lg:-translate-x-[41%]'>
      <div className='relative '>
       <input type='text'  placeholder='Location e.g Yaba' className={`${styles.input}`} />
       <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5 h-5 absolute top-2/4 -translate-y-2/4 right-4 text-headerPrimary'/>
      </div>
     </div>
     <div className='mt-2 flex w-full h-11 px-4 lg:px-10 rounded-lg justify-between items-center bg-bgSecondary text-textSecondary lg:h-16 lg:max-w-[70rem]'>
      <h3>Apartments <span className='mx-2'>/</span> Hostels</h3>
      <h3 className='flex items-center'>Filter
       <span className='ml-2'>
        <FontAwesomeIcon icon={faFilter} className='w-4 h-4' />
       </span>
      </h3>
     </div>
    </section>
    <section className='mt-4 lg:mt-6'>
     <h3 className='font-bold font-jhengHei text-headerPrimary lg:text-2xl'>Apartments</h3>
     <div className='mt-3 lg:mt-[0.88rem] flex flex-wrap gap-5 justify-center  lg:justify-items-start lg:justify-between lg:gap-y-8'>
      <ApartmentBox />
      <ApartmentBox />
      <ApartmentBox />
      <ApartmentBox />
      <ApartmentBox />
      <ApartmentBox />
      <ApartmentBox />
      <ApartmentBox />
      <ApartmentBox />
      <ApartmentBox />
      <ApartmentBox />
      <ApartmentBox />
      <ApartmentBox />
      <ApartmentBox />
     </div>
    </section>
    <section className='mt-6'>
     <h3 className='font-bold font-jhengHei'>Hostels</h3>
     <div className='mt-4 flex flex-wrap gap-5 justify-center'>
      <HostelBox />
      <HostelBox />
      <HostelBox />
      <HostelBox />
      <HostelBox />
      <HostelBox />
      <HostelBox />
      <HostelBox />
      <HostelBox />
      <HostelBox />
      <HostelBox />
      <HostelBox />
      <HostelBox />
     </div>
    </section>
    </>
  )
}

export default Properties