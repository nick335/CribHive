import {  faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styles from './askedQuestions.module.css'
import React from 'react'
import { motion } from 'framer-motion'

const Disclosure = () => {
 let [isOpen, setIsOpen] = useState(false)

 function toggleDisclosure (){
  setIsOpen(prev => !prev)
 }

  return (
    <div className='font-jhengHei mb-3.5'>
     <div 
       className={`flex items-center justify-between py-1 border-b lg:py-1.5 cursor-pointer  ${ isOpen ? 'border-transparent' : 'border-primaryBorder '} duration-100 ease-linear`}
       onClick={() => setIsOpen(isOpen => !isOpen)}>
      <h3 className='text-sm font-bold text-headerPrimary lg:text-2xl '>How long till i get the scheduled time?</h3>
      <FontAwesomeIcon icon={faChevronDown} className={`${styles.disclosureControl} ${ isOpen ? styles.arrowRotate : 'rotate-0'}`} />
     </div>
     <motion.div 
       initial={false}
       animate={
        isOpen ? {
         height: "auto",
         opacity: 1,
         display: "block",
         paddingBottom: '4px',
         transition: {
          delay: 0.1,
          height: {
           duration: 0.4,
           // delay: 0.15
          },
          opacity: {
           duration: 0.25,
           delay: 0.35,
          },
         }
        } : {
         height: 0,
         opacity: 0,
         paddingBottom: '0px',
         transition: {
          height: {
           duration: 0.4,
          },
          opacity: {
           duration: 0.25
          }
         },
         transitionEnd: {
          display: 'none'
         }
        }
       }
       className='text-xs border-b  border-b-primaryBorder lg:text-base pl-4'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit sapiente totam temporibus hic dolore. Eligendi, facere! Odit, atque? Accusamus voluptas repellendus itaque, dicta exercitationem tenetur dolores magni nisi delectus!
     </motion.div>
    </div>
  )
}

export default Disclosure