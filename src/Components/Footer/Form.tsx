import React from 'react'
import styles from './footer.module.css'

const Form = () => {
  return (
    <div className='mt-10 font-jhengHei lg:mt-0 lg:absolute lg:left-2/4 lg:-translate-x-[43%]'>
     <h3 className='text-lg font-bold text-bgLight lg:text-xl'>Contact us</h3>
     <form className='mt-4 md:max-w-[600px] lg:max-w-[414px]'>
      <input className={`${styles.input}`} type='text' placeholder='Name' />
      <input className={`${styles.input}`} type='email' placeholder='Email'  />
      <textarea placeholder='Message' className={`${styles.input} min-h-[79px]`}/>
      <button className='block ml-auto h-10 w-32 bg-btnhover rounded-lg text-sm'>Send</button>
     </form>
    </div>
  )
}

export default Form