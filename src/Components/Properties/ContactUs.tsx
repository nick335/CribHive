import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './properties.module.css'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'

const ContactUs = () => {
  return (
    <div className='mt-8 w-full lg:w-[90%] lg:ml-auto lg:h-[15rem] xl:h-[17.5625rem] lg:bg-bgPrimary lg:shadow-contactShadow'>
     <h3 className='font-bold text-headerPrimary lg:text-2xl xl:text-[2rem] lg:text-center lg:pt-6'>Contact Us</h3>
     <div className={`mt-3.5 lg:mt-[1.38rem] ${styles.contactusDiv}`}>
      <FontAwesomeIcon icon={faWhatsapp} className='w-6 h-6' />
      <h5 className='mx-auto'>WhatsApp Message</h5>
     </div>
     <div className={`mt-4 lg:mt-6  ${styles.contactusDiv}`} >
      <BsTelephone size='24px' color='#201B1B' />
      <h5 className='mx-auto'>Phone Call</h5>
     </div>
    </div>
  )
}

export default ContactUs