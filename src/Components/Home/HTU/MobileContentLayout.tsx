import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import styles from './howtouse.module.css'
import MotionPara from './MotionPara'
import data from './Data'
import DashedLine from './DashedLine'

interface props{
 agentContentDisplay: boolean,
}

const MobileContentLayout = ({agentContentDisplay} : props) => {
const [indexDisplay, setIndexDisplay] = useState(0)
// user steps data
const userSteps = data.userSteps
// agents steps data
const agentsSteps = data.agentSteps

// function AutoChangeIndex(){
//  // if(indexDisplay === 2){
//  //  setIndexDisplay(0) }
//  // // }else{
//  // //  setIndexDisplay(index => index + 1)
//  // // }
//  console.log(indexDisplay)
// }

// setInterval(AutoChangeIndex, 5000);

function setIndex(idx: number){
 setIndexDisplay(idx)
}

  return (
    <div className='mx-auto max-w-[15.375rem]' >

     <div className='flex justify-between items-center my-[1.4375rem]'>
      <div onClick={() => setIndex(0)} className={`${styles.controlBoxActive} ${styles.controlBox}`}>1 <DashedLine /></div>
      <div onClick={() => setIndex(1)} className={`${styles.controlBox}`}>2 <DashedLine /></div>
      <div onClick={() => setIndex(2)} className={`${styles.controlBox}`}>3</div>
     </div>

     <div className='w-full min-h-[2.38rem]  max-h-[2.38rem] flex justify-center mx-auto '>
      <AnimatePresence initial={false} >
       { !agentContentDisplay && indexDisplay === 0 && <MotionPara key={0} content={userSteps[0]} /> }
       { !agentContentDisplay && indexDisplay === 1 && <MotionPara key={1} content={userSteps[1]} /> }
       { !agentContentDisplay && indexDisplay === 2 && <MotionPara key={2} content={userSteps[2]} /> }
       { agentContentDisplay && indexDisplay === 0 && <MotionPara key={3} content={agentsSteps[0]} /> }
       { agentContentDisplay && indexDisplay === 1 && <MotionPara key={4} content={agentsSteps[1]} /> }
       { agentContentDisplay && indexDisplay === 2 && <MotionPara key={5} content={agentsSteps[2]} /> }
      </AnimatePresence>
     </div>
     
    </div>
  )
}

export default MobileContentLayout