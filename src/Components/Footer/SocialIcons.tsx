import { faSquareFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './footer.module.css'
import React from 'react'

const SocialIcons = () => {
  return (
    <div className='mt-4 font-jhengHei text-textSecondary lg:mt-0'>
     <h3 className='text-base font-bold lg:text-xl text-bgLight'>Social Media</h3>
     <div className='mt-5 flex items-center gap-x-[22px]'>
      <FontAwesomeIcon icon={faSquareFacebook} className={styles.socialIcons} />
      <FontAwesomeIcon icon={faTwitter} className={styles.socialIcons} />
      <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons} />
      <FontAwesomeIcon icon={faInstagram} className={styles.socialIcons} />
     </div>
    </div>
  )
}

export default SocialIcons