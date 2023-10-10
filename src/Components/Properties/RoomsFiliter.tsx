import React from 'react'
import styles from './properties.module.css'

const RoomsFiliter = () => {
  return (
   <div className={`${styles.filterSectionDiv} pb-8 lg:pb-[1.56rem]`}>
    <h3 className={`${styles.filterSectionDivHeader}`}>No. Man room</h3>
    <div className={`${styles.radioDiv}`} >
      <div className={`${styles.FilterRadioBtn}`}></div>
      <h5>1 Man room</h5>
    </div>
    <div className={`${styles.radioDiv}`} >
      <div className={`${styles.FilterRadioBtn}`}></div>
      <h5>2 Man room</h5>
    </div>
    <div className={`${styles.radioDiv}`} >
      <div className={`${styles.FilterRadioBtn}`}></div>
      <h5>4 Man room</h5>
    </div>
    <div className={`${styles.radioDiv}`} >
      <div className={`${styles.FilterRadioBtn}`}></div>
      <h5>8 Man room</h5>
    </div>
  </div>
  )
}

export default RoomsFiliter