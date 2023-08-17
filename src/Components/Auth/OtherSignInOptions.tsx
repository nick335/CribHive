import React from 'react'
import google from '../../../public/images/auth/goggle.svg'
import styles from './auth.module.css'
import facebook from '../../../public/images/auth/facebook.svg'
import ResponsiveImage from '../Utility/ResponsiveImage'

const OtherSignInOptions = () => {
  return (
    <div className='font-jhengHei mt-7'>
     <div className='flex justify-center items-center font-bold gap-x-1'>
      <span className='h-[0.0625rem] w-2/4 bg-black'></span>
      or
      <span className='h-[0.0625rem] w-2/4 bg-black'></span>
     </div>
     <button className={`${styles.otherSignInOptionsBtn} mt-7`}>
      <ResponsiveImage 
       url={google}
       alt='google icon'
       addons=''
       style={`${styles.icon}`}
      />
      Login with Google
     </button>
     <button className={`${styles.otherSignInOptionsBtn} mt-6`}>
      <ResponsiveImage 
       url={facebook}
       alt='facebook icon'
       style={styles.icon}
       addons=''
      />
      Login with Facebook
     </button>
    </div>
  )
}

export default OtherSignInOptions