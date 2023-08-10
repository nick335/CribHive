import React from 'react'
import ResponsiveImage from '../Utility/ResponsiveImage'
import Logo from '../../../public/images/footer/Logo.svg'
import styles from './footer.module.css';
import mail from '../../../public/images/footer/Mail.svg'
import phone from '../../../public/images/footer/Phone.svg'

const ContactInfo = () => {
  return (
    <div className='text-textSecondary font-jhengHei'>
     <ResponsiveImage 
      url={Logo}
      alt='logo'
      style={styles.logo}
      addons=''
     />
     <p className='pt-3 max-w-[228px] text-sm text-textSecondary lg:text-base'>The very best accomodation service is one click away</p>
     <div className={`${styles.contactDiv} mb-3 mt-5`}>
      <ResponsiveImage 
       url={mail}
       alt='mail'
       style={styles.contactIcon}
       addons=''
      />
      <p className={`${styles.contactInfo}`}>cribhive@gmail.com</p>
     </div>
     <div className={`${styles.contactDiv} mb-3 mt-5`}>
      <ResponsiveImage 
       url={phone}
       alt='mail'
       style={styles.contactIcon}
       addons=''
      />
      <p className={`${styles.contactInfo}`}>070 5526 8762</p>
     </div>
    </div>
  )
}

export default ContactInfo