import React from 'react'
import { LiaPlusCircleSolid } from 'react-icons/lia'
import { LuFilter } from 'react-icons/lu'
import styles from '@/Components/ManageProperties/manageproperties.module.css'
import promotion from '../../../public/images/manageproperties/promotion.svg'
import filter from '../../../public/images/manageproperties/Filter.svg'
import add from '../../../public/images/manageproperties/new.svg'
import Link from 'next/link'
import ResponsiveImage from '@/Components/Utility/ResponsiveImage'

const page = () => {
  return (
    <main className='mt-4 mx-6'>
      <div className='px-4 rounded-xl py-2 bg-bgSecondary flex items-end justify-between gap-x-8 md:max-w-[40.75rem] md:px-[5.31rem] md:mx-auto md:py-5 md:rounded-2xl'>
        <Link href='/manageproperties/add'>
          <div className={`${styles.linkDiv}`}>
            <ResponsiveImage 
              url={add}
              addons=''
              alt='add'
              style={styles.manageNavIcon}
            />
            <h3>Add new</h3>
          </div>
        </Link>
        
        <div className={`${styles.linkDiv}`}>
          <ResponsiveImage 
            url={filter}
            addons=''
            alt='filter'
            style={styles.manageNavIcon}
          />
          <h3>Filter</h3>
        </div>
        <div className={`${styles.linkDiv}`}>
          <ResponsiveImage 
            url={promotion}
            addons=''
            alt='promotion'
            style={styles.manageNavIcon}
          />
          <h3>Promote</h3>
        </div>
      </div>
      
    </main>
  )
}

export default page