import React from 'react'
import { motion } from 'framer-motion'
import ResponsiveImage from '@/Components/Utility/ResponsiveImage'
import { StaticImageData } from 'next/image'
import styles from './howtouse.module.css'

interface props {
 url: string | StaticImageData
}

const MotionImage = ({url} : props) => {

const variants  = {
 enter:{
  opacity:0,
  display: 'none'
 },
 center: {
  opacity: 1,
  display: 'block'
 },
 exit: {
  opacity: 0
 }
}

  return (
   <motion.div 
    className='w-fit mx-auto md:mx-0 md:w-full md:min-w-[100%] bg-slate-500 md:max-w-[100%]'
    variants={variants}
    initial="enter"
    animate="center"
    transition={{
     duration: 0.2
    }}
    exit="exit"
   >
   <ResponsiveImage 
     url={url}
     alt= 'client&agent'
     addons=''
     style={styles.image}
   />
 </motion.div>
  )
}

export default MotionImage