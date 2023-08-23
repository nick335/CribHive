'use client'
import React, { useState, useRef } from 'react'
import styles from './howtouse.module.css'
import { AnimatePresence } from 'framer-motion'
import clientImage from '../../../../public/images/home/client.png'
import agentImage from '../../../../public/images/home/agent.png'
import MotionImage from './MotionImage'
import MobileContentLayout from './MobileContentLayout'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import DesktopContentLayout from './DesktopContentLayout'

const HowToUse = () => {
 const [agentStepsDisplay, setAgentStepsDisplay] = useState(false)
 const nodeRef = useRef<any>(null)

 function displayAgentSteps (){
  setAgentStepsDisplay(true)
 }
 function displayClientSteps(){
  setAgentStepsDisplay(false)
 }

  return (
    <section className=' font-jhengHei relative mt-12 md:px-6 md:bg-bgLight md:pt-12 lg:px-[5%]'>
      <div className='flex items-center justify-center md:relative md:h-[34px] '>
        <h2 className='text-center font-bold text-lg text-headerPrimary md:text-xl lg:text-3xl '>How to Use Cribhive</h2>
        <div className='absolute top-[14.12rem] left-2/4 -translate-x-2/4 z-10 w-[11.625rem] mx-auto border border-headerPrimary flex px-3.5 text-xs items-center text-center rounded md:mx-0 md:ml-auto lg:text-lg lg:w-[18.5rem] lg:px-6  md:top-0 md:right-0 md:translate-x-0'>
          <h3 className={`border-r border-headerPrimary pr-5 py-2 lg:pr-8 cursor-pointer ${ agentStepsDisplay? '': styles.active }`} onClick={displayClientSteps}>Client</h3>
          <h3 className={`pl-3 cursor-pointer lg:pl-5 ${agentStepsDisplay ? styles.active : ''}`} onClick={displayAgentSteps}>Agent/Landlord</h3>
        </div>
      </div>
      <div className=' mt-3 mx-6 bg-bgLight h-[390px] relative pt-4 md:mx-0 md:bg-transparent md:mt-8 md:flex md:items-center md:justify-start md:h-fit lg:mt-12'>
        <AnimatePresence initial={false} > 
        <div className='md:max-w-[50%] md:w-[50%]'>
        { !agentStepsDisplay && <MotionImage key={1}  url={clientImage}/> }
        { agentStepsDisplay && <MotionImage key={2} url={agentImage}/> } 
        </div>
        </AnimatePresence>
        <div className='shadow-overflowdiv bg-bgPrimary absolute -left-6 top-[130px] min-h-28 py-4 w-screen md:static md:w-2/4 md:min:w-2/4 md:rounded-lg md:min-h-0 md:h-fit md:bg-transparent justify-start'>
          <div className=' md:w-[140%]  lg:w-[120%] md:z-30 md:-ml-[40%] lg:-ml-[20%] md:relative md:bg-bgPrimary min-h-[12.625rem] md:px-2 md:rounded-lg md:pt-4 md:pb-10 lg:pb-20 lg:pt-6'>
            <SwitchTransition mode='out-in' >
              <CSSTransition 
                nodeRef={nodeRef}
                addEndListener={(done: () => void) => {
                  nodeRef.current?.addEventListener("transitionend", done, false)
                }}
                classNames={{
                  appear: styles.fadeEnter,
                  appearActive: styles.fadeEnterActive,
                  exit: styles.fadeExit,
                  exitActive: styles.fadeExitActive,
                }}
                key={agentStepsDisplay ? 1 : 2}
              >
                <div ref={nodeRef} className=''>
                  <h3 className='text-lg font-bold text-center md:text-xl lg:text-2xl'>
                    {agentStepsDisplay ? 'How to add apartment' : 'How to Book?'}
                  </h3>
                </div>
              </CSSTransition>
            </SwitchTransition>
            <MobileContentLayout 
              agentContentDisplay={agentStepsDisplay}
            />
            <DesktopContentLayout  
              agentContentDisplay = {agentStepsDisplay}
            />
            <button className='btnPrimary w-36 md:w-[8rem] h-10 rounded-lg mt-[1.4375rem] mx-auto flex items-center justify-center cursor-pointer text-sm md:absolute md:-bottom-6 md:right-0'>Get Started</button> 
          </div>        
        </div>
      </div>
    </section>
  )
}

export default HowToUse