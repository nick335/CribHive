'use client'
import React, { useState } from 'react'
import styles from './howtouse.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import clientImage from '../../../../public/images/home/client.png'
import agentImage from '../../../../public/images/home/agent.png'
import ResponsiveImage from '@/Components/Utility/ResponsiveImage'
import { StaticImageData } from 'next/image'
import MotionImage from './MotionImage'
import MobileContentLayout from './MobileContentLayout'

const HowToUse = () => {
 const [agentStepsDisplay, setAgentStepsDisplay] = useState(false)

 function displayAgentSteps (){
  setAgentStepsDisplay(true)
 }
 function displayClientSteps(){
  setAgentStepsDisplay(false)
 }

  return (
    <section className='mt-12 mx-6 bg-bgLight h-[390px] relative font-jhengHei pt-4'>
      <AnimatePresence initial={false} > 
       { !agentStepsDisplay && <MotionImage key={1}  url={clientImage}/> }
       { agentStepsDisplay && <MotionImage key={2} url={agentImage}/> } 
      </AnimatePresence>
     <div className='shadow-overflowdiv bg-bgPrimary absolute -left-6 top-[130px] min-h-28 py-4 w-screen'>
      <div>
       <h3 className='text-lg font-bold text-center'>How to book?</h3>
       <div className='mt-3 w-[11.625rem] mx-auto border border-headerPrimary flex px-3.5 text-xs items-center text-center rounded lg:text-lg lg:w-[18.5rem] lg:px-6 lg:mx-0'>
        <h3 className={`border-r border-headerPrimary pr-5 py-2 lg:pr-8 cursor-pointer ${ agentStepsDisplay? '': styles.active }`} onClick={displayClientSteps}>Client</h3>
        <h3 className={`pl-3 cursor-pointer lg:pl-5 ${agentStepsDisplay ? styles.active : ''}`} onClick={displayAgentSteps}>Agent/Landlord</h3>
       </div>
      </div>
      <MobileContentLayout 
        agentContentDisplay={agentStepsDisplay}
      />
      <button className='btnPrimary w-36 h-10 rounded-lg mt-[1.4375rem] mx-auto flex items-center justify-center cursor-pointer text-sm'>Get Started</button>
     </div>
    </section>
  )
}

export default HowToUse