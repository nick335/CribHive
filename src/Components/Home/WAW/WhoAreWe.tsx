import React from 'react'
import ResponsiveImage from '@/Components/Utility/ResponsiveImage'
import Photo from '../../../../public/images/home/whoImage.png'
import styles from './whoarewe.module.css'

const WhoAreWe = () => {
  return (
    <section className={`mt-12 lg:mt-[4.5rem]  h-[309px] relative font-jhengHei flex md:mx-0  px-6 md:py-8 md:flex md:items-center md:justify-center md:h-fit lg:px-[5%] md:bg-bgLight`}>
     <div className='flex bg-bgLight w-full pt-4 md:bg-transparent md:w-[50%] md:max-w-[50%] '>
        <ResponsiveImage 
          url={Photo}
          alt={'who we are'}
          style={styles.photo}
          addons='block'
        />
      </div> 
     <div className='absolute top-[130px] w-screen -left-0 bg-bgPrimary  shadow-overflowdiv  md:static md:left-0 md:w-2/4 md:rounded-lg '>
      <div className='md:w-[140%] md:z-30 md:-ml-[40%] md:relative md:bg-bgPrimary min-h-[180px] px-6 pt-4 pb-6 md:rounded-lg lg:px-[3.75rem] lg:pt-[1.875rem] lg:pb-[4.375rem] lg:w-[120%] lg:-ml-[20%]'>
       <h3 className='text-lg text-headerPrimary font-bold text-center lg:text-4xl'>Who are we?</h3>
       <p className='pt-3 text-sm leading-5 lg:pt-6 lg:text-xl tracking-[0.2px] text-textPrimary'>CribHive strives to solve the old age problem "House Hunting", we serve as the bridge between Clients and Agents/Landlords in other to provide seamless experience by providing high quality accomodation a finger tip away.</p>
      </div>
     </div>
    </section>
  )
}

export default WhoAreWe