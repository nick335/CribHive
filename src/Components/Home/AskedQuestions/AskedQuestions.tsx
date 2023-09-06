'use client'
import React, { useRef } from 'react'
import { useState } from 'react'
import styles from './askedQuestions.module.css'
import AgentsQuestions from './AgentsQuestions'
import ClientQuestions from './ClientQuestions'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

const AskedQuestions = () => {
 const [agentQuestionsDisplay, setAgentQuestionDisplay] = useState(false)
 const clientRef = useRef<HTMLDivElement>(null)
 const agentRef = useRef<HTMLDivElement>(null)
 const nodeRef = !agentQuestionsDisplay ? clientRef : agentRef

 function displayClientQuestions (){
  setAgentQuestionDisplay(false)
 }
 function displayAgentQuestions(){
  setAgentQuestionDisplay(true)
 }
  return (
    <section className='mt-12 w-[90%] mx-auto font-jhengHei lg:mt-[7.62rem]'>
     <div className='lg:flex '>
       <h3 className='text-headerPrimary text-lg text-center font-bold lg:text-4xl self-center mx-auto'>Frequently asked questions</h3>
       <div className='mt-3 w-[11.625rem] mx-auto border border-headerPrimary flex px-3.5 text-xs items-center text-center rounded lg:text-lg lg:w-[18.5rem] lg:px-6 lg:mx-0'>
        <h3 className={`border-r border-headerPrimary pr-5 py-2 lg:pr-8 cursor-pointer ${ agentQuestionsDisplay ? '': styles.active }`} onClick={displayClientQuestions}>Client</h3>
        <h3 className={`pl-3 cursor-pointer lg:pl-5 ${agentQuestionsDisplay ? styles.active : ''}`} onClick={displayAgentQuestions}>Agent/Landlord</h3>
       </div>
     </div>
     <div className='mt-8 lg:mt-16'>
      <SwitchTransition mode='out-in'>
       <CSSTransition
        key={ agentQuestionsDisplay ? 'agent' : 'client' }
        nodeRef={nodeRef}
        addEndListener={(done: () => void) => {
         if(nodeRef.current){
          nodeRef.current.addEventListener("transitionend", done , false);
         }
        }}
        classNames={{
         appear: styles.fadeEnter,
         appearActive: styles.fadeEnterActive,
         exit: styles.fadeExit,
         exitActive: styles.fadeExitActive
        }}
       >
        <div ref={nodeRef}>
        { agentQuestionsDisplay ? <AgentsQuestions/> : <ClientQuestions /> }
        </div>
       </CSSTransition>
      </SwitchTransition>
     </div>
    </section>
  )
}

export default AskedQuestions