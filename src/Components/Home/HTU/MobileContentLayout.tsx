import { AnimatePresence } from 'framer-motion'
import React, {   useEffect, useRef, useState } from 'react'
import styles from './howtouse.module.css'
import data from './Data'
import DashedLine from './DashedLine'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

interface props{
 agentContentDisplay: boolean,
}

const MobileContentLayout = ({agentContentDisplay} : props) => {
const [indexDisplay, setIndexDisplay] = useState(0)
const nodeRef = useRef<any>(null)
const delay = 4000
// user steps data
const Steps = data




function setIndex(idx: number){
  if(!agentContentDisplay){
    setIndexDisplay(idx)
  }else{
    let newidx = idx + 3
    setIndexDisplay(newidx)
  }
}
 useEffect(() => {
  setIndex(0)
}, [agentContentDisplay])
  useEffect(() => {
   const timeout = setTimeout(
      () => {
        if(!agentContentDisplay){
          setIndexDisplay((prevIndex) => prevIndex === 2 ? 0 : prevIndex + 1 )
        }else {
          setIndexDisplay((prevIndex) => prevIndex === 5 ? 3 : prevIndex + 1)
        }
      }, delay
    )
    return () => clearTimeout(timeout)
  }, [indexDisplay])

  return (
    <div className='mx-auto max-w-[15.375rem] md:hidden' >
     <div className='flex justify-between items-center mb-[1.4375rem] mt-[4.19rem]'>
      <div onClick={() => setIndex(0)} className={`${ indexDisplay === 0 || indexDisplay === 3 ? styles.controlBoxActive : '' } ${styles.controlBox}`}>1 <DashedLine /></div>
      <div onClick={() => setIndex(1)} className={` ${ indexDisplay === 1 || indexDisplay === 4 ? styles.controlBoxActive : '' } ${styles.controlBox}`}>2 <DashedLine /></div>
      <div onClick={() => setIndex(2)} className={`${ indexDisplay === 2 || indexDisplay === 5 ? styles.controlBoxActive : '' } ${styles.controlBox}`}>3</div>
     </div>

     <div className='w-full min-h-[2.38rem]  max-h-[2.38rem] flex justify-center mx-auto '>
      <SwitchTransition mode='out-in' >
        <CSSTransition 
          nodeRef={nodeRef}
          addEndListener={(done: () => void) => {
            nodeRef.current?.addEventListener("transitionend", done, false)
          }}
          key={indexDisplay}
          classNames={{
            appear: styles.fadeEnter,
            appearActive: styles.fadeEnterActive,
            exit: styles.fadeExit,
            exitActive: styles.fadeExitActive
          }}
        >
          <div ref={nodeRef}>
            <p className='max-w-[10.9375rem] mx-auto font-jhengHei text-sm text-textPrimary text-center'>
              {Steps[indexDisplay]}
            </p>
          </div>
          
        </CSSTransition>
      </SwitchTransition>
     </div>
     
    </div>
  )
}

export default MobileContentLayout