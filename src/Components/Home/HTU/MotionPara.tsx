import React from 'react'
import { motion } from 'framer-motion'

interface props {
 content: string
}

const variants = {
 enter:{
  opacity:0,
  // display: 'none'
 },
 center: {
  opacity: 1,
  // display: 'block'
 },
 exit: {
  opacity: 0
 }
}

const MotionPara = ({content}: props) => {
  return (
    <motion.div 
     className='max-w-[10.9375rem] mx-auto font-jhengHei text-sm text-textPrimary text-center'
     variants={variants}
     initial='enter'
     animate='center'
     transition={{
      duration: 0.2
     }}
    >
     { content}
    </motion.div>
  )
}

export default MotionPara