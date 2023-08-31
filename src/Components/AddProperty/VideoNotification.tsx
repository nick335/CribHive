import React from 'react'
import styles from './addproperty.module.css'

interface props{
 display: boolean
 gotIt: (para: string) => void
}

const VideoNotification = ({display, gotIt}: props) => {
  return (
    <div className={`${ display ? 'fixed z-[100]  h-screen w-screen' : 'hidden'} ${styles.NotifyOverlay}`}>
     <div className={`${ display ? 'block' : 'hidden'} ${styles.notifyDiv}`}>
      <p className={`${styles.notifyPara}`}>A video with maximum length of 3 minutes is allowed, showing the essential areas of the property</p>
      <button onClick={() => gotIt('Vid')} className={`btnPrimary ${styles.notifyBtn}`}>Got it</button>
     </div>
    </div>
  )
}

export default VideoNotification