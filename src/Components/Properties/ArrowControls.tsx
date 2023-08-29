import ResponsiveImage from '@/Components/Utility/ResponsiveImage'
import React from 'react'
import arrowLeft from '../../../public/images/properties/arrowLeft.svg'
import arrowRight from '../../../public/images/properties/arrowRight.svg'
import styles from './properties.module.css'
import { useStore } from '@/store/useWindowWidth'

interface props {
 slideRight: () => void,
 slideLeft: () => void,
 activeIdx: number,
 Arraylength: number,
}


const ArrowControls = ({slideRight, slideLeft, activeIdx, Arraylength}: props) => {
 const windowWidth = useStore().windowWidth
 const lastImageIdx = windowWidth > 1024 ? Arraylength - 2 : Arraylength - 1
  return (
    <>
    { activeIdx > 0 && <div className='w-fit h-fit absolute cursor-pointer top-2/4 -translate-y-2/4 left-6' onClick={slideLeft}>
     <ResponsiveImage 
       alt='arrow-left'
       url={arrowLeft}
       style={styles.arrowLeft}
       addons=''
     />
    </div>}
    { activeIdx < lastImageIdx && <div className='w-fit h-fit absolute cursor-pointer top-2/4 -translate-y-2/4 right-6' onClick={slideRight}>
     <ResponsiveImage 
       alt='arrow-Right'
       url={arrowRight}
       style={styles.arrowRight}
       addons=''
     />
    </div>}
    
    </>
  )
}

export default ArrowControls