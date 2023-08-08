import React from 'react'
import ResponsiveImage from '@/Components/Utility/ResponsiveImage'
import Photo from '../../../../public/images/home/whoImage.png'
import styles from './whoarewe.module.css'

const WhoAreWe = () => {
  return (
    <section className='mt-12 mx-6 bg-bgLight h-[309px] relative font-jhengHei flex md:mx-0  md:px-6 md:py-8 md:flex md:items-center md:justify-center md:h-fit lg:px-[5%]'>
     <ResponsiveImage 
        url={Photo}
        alt={'who we are'}
        style={styles.photo}
        addons='block'
      />
     <div className='absolute top-[130px] w-screen -left-6 bg-bgPrimary  shadow-overflowdiv  md:static md:left-0 md:w-2/5 md:rounded-lg '>
      <div className='md:w-[140%] md:z-30 md:-ml-[40%] md:relative md:bg-bgPrimary min-h-[180px] px-6 pt-4 pb-6 md:rounded-lg lg:px-[3.75rem] lg:pt-[1.875rem] lg:pb-[4.375rem] lg:w-[135%] lg:-ml-[35%]'>
       <h3 className='text-lg font-bold text-center lg:text-4xl'>Who are we?</h3>
       <p className='pt-3 text-sm leading-5 lg:pt-6 lg:text-xl tracking-[0.2px]'>CribHive strives to solve the old age problem "House Hunting", we serve as the bridge between Clients and Agents/Landlords in other to provide seamless experience by providing high quality accomodation a finger tip away.</p>
      </div>
     </div>
    </section>
  )
}

export default WhoAreWe