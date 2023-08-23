import React, { useRef } from 'react'
import styles from './howtouse.module.css'
import DashedLine from './DashedLine'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import data from './Data'


interface props{
 agentContentDisplay: boolean
}


const DesktopContentLayout = ({agentContentDisplay} : props) => {
 const nodeRef = useRef<any>(null)
 const nodeRef1 = useRef<any>(null)
 const nodeRef2 = useRef<any>(null)
 const Data = data
 // const delay = 4000
  return (
    <div className='flex items-center justify-center mt-8  mx-auto gap-x-8 xl:gap-x-14'>
     <div className={`${styles.contentDiv}`}>
      <div className={`${styles.controlBox}`}>1
      <DashedLine />
      </div>
      <SwitchTransition mode='out-in' >
       <CSSTransition 
        nodeRef={nodeRef1}
        addEndListener={(done: () => void) => {
         nodeRef1.current?.addEventListener("transitionend", done, false)
        }}
        key = { agentContentDisplay ? 1 : 2 }
        classNames={{
         appear:styles.fadeEnter,
         appearActive: styles.fadeEnterActive,
         exit: styles.fadeExit,
         exitActive: styles.fadeExitActive,
        }}
        
       >
       <p ref={nodeRef1}>{ agentContentDisplay ? Data[3] : Data[0] }</p>
       </CSSTransition>
      </SwitchTransition>

     </div>
     <div className={`${styles.contentDiv}`}>
      <div className={`${styles.controlBox}`}>2
      <DashedLine />
      </div>
      <SwitchTransition mode='out-in' >
       <CSSTransition 
        nodeRef={nodeRef2}
        addEndListener={(done: () => void) => {
         nodeRef2.current?.addEventListener("transitionend", done, false)
        }}
        key = { agentContentDisplay ? 3 : 4 }
        classNames={{
         appear:styles.fadeEnter,
         appearActive: styles.fadeEnterActive,
         exit: styles.fadeExit,
         exitActive: styles.fadeExitActive,
        }}
        
       >
       <p ref={nodeRef2}>{ agentContentDisplay ? Data[4] : Data[1] }</p>
       </CSSTransition>
      </SwitchTransition>
     </div>
     <div className={`${styles.contentDiv}`}>
      <div className={`${styles.controlBox}`}>3</div>
      <SwitchTransition mode='out-in' >
       <CSSTransition 
        nodeRef={nodeRef}
        addEndListener={(done: () => void) => {
         nodeRef.current?.addEventListener("transitionend", done, false)
        }}
        key = { agentContentDisplay ? 1 : 2 }
        classNames={{
         appear:styles.fadeEnter,
         appearActive: styles.fadeEnterActive,
         exit: styles.fadeExit,
         exitActive: styles.fadeExitActive,
        }}
        
       >
       <p ref={nodeRef}>{ agentContentDisplay ? Data[5] : Data[2] }</p>
       </CSSTransition>
      </SwitchTransition>
     </div>
    </div>
  )
}

export default DesktopContentLayout