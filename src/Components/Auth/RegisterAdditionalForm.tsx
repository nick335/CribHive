import React from 'react'
import styles from './auth.module.css'

const RegisterAdditionalForm = () => {
  return (
   <form className='font-jhengHei lg:max-w-[40.0625rem] lg:mx-auto'>
    <h3 className='mt-8 font-bold'>Identification Type</h3>
    <div className='mt-2'>
     <input type='text' placeholder='NIN Number' className={`${styles.input}`}/>
    </div>
    <div className={`${styles.inputGap}`}>
     <input type='text' placeholder='Fill Info' className={`${styles.input}`}/>
    </div>
    <h3 className='mt-6 font-bold'>Bank Details</h3>
    <div className='mt-2'>
     <input type='text' placeholder='Account Number' className={`${styles.input}`}/>
    </div>
    <div className={`${styles.inputGap}`}>
     <input type='text' placeholder='Bank' className={`${styles.input}`}/>
    </div>
    <button className={`btnPrimary mt-8 ${styles.formBtn}`}>Begin</button>
   </form>
  )
}

export default RegisterAdditionalForm