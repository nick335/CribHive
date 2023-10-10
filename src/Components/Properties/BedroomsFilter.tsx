import React from 'react'
import styles from './properties.module.css'

const BedroomsFilter = () => {
  return (
    <div className={`${styles.filterSectionDiv} pb-8 lg:pb-[1.56rem]`}>
      <h3 className={`${styles.filterSectionDivHeader}`}>Bedroom</h3>
      <div className={`${styles.radioDiv}`} >
        <div className={`${styles.FilterRadioBtn}`}></div>
        <h5>1 Bedroom</h5>
      </div>
      <div className={`${styles.radioDiv}`} >
        <div className={`${styles.FilterRadioBtn}`}></div>
        <h5>2 Bedroom</h5>
      </div>
      <div className={`${styles.radioDiv}`} >
        <div className={`${styles.FilterRadioBtn}`}></div>
        <h5>3 Bedroom</h5>
      </div>
    </div>
  )
}

export default BedroomsFilter