import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './properties.module.css'
import React from 'react'

const ContactUs = () => {
  return (
    <div className='mt-8 w-full lg:w-[80%] lg:ml-auto h-[17.5625rem] bg-bgPrimary shadow-contactShadow'>
     <h3 className='font-bold text-headerPrimary text-center lg:text-[2rem] lg:text-center lg:pt-6'>Contact Us</h3>
     <div className={`mt-3.5 lg:mt-[1.38rem] ${styles.contactusDiv}`}>
      <FontAwesomeIcon icon={faWhatsapp} className='w-6 h-6' />
      <h5 className='mx-auto'>WhatsApp Message</h5>
     </div>
     <div className={`mt-4 ${styles.contactusDiv}`} >
      <FontAwesomeIcon icon={faPhone} className='w-6 h-6' />
      <h5 className='mx-auto'>Phone Call</h5>
     </div>
    </div>
  )
}

export default ContactUs