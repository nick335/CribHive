import React from 'react'
import styles from './addproperty.module.css'

interface props {
 display: boolean
 gotIt: (para: string) => void
}

const PictureNotificattion = ({display, gotIt}: props) => {
  return (
   <div className={`${ display === true ? 'fixed z-[100] h-screen w-screen' : 'hidden'} ${styles.NotifyOverlay}`}>
    <div className={`${ display === true ? 'block' : 'hidden'} ${styles.notifyDiv}`}>
     <p className={`${styles.notifyPara}`}>A minimum of 4 pictures is allowed, showing the essential areas of the property</p>
     <p className={`${styles.notifyPara}`}><span className='text-textSecondary'>Note:</span> The first picture added acts the preview dispaly picture</p>
     <button className={`btnPrimary ${styles.notifyBtn}`} onClick={() => gotIt('Pic')}>Got it</button>
    </div>
  </div>
  )
}

export default PictureNotificattion