import React from 'react'
import { useState, useEffect } from 'react'


interface props {
 active: boolean | string
}

const Hostel = ({active}: props) => {
  const [isActive, setActive] = useState(false)


  useEffect(() => {
    if(typeof active === 'string' ){
      if(active === 'Hostel'){
        setActive(true)
      }else{
        setActive(false)
      }
    }else {
      setActive(active)
    }
  }, [active])
  
  return (
   <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path className={`${ isActive ? 'fill-headerSecondary' : 'fill-headerPrimary'  } transition-all ease-in duration-75`} d="M12.9444 7.11111V0H4.05556V3.55556H0.5V16H7.61111V12.4444H9.38889V16H16.5V7.11111H12.9444ZM4.05556 14.2222H2.27778V12.4444H4.05556V14.2222ZM4.05556 10.6667H2.27778V8.88889H4.05556V10.6667ZM4.05556 7.11111H2.27778V5.33333H4.05556V7.11111ZM7.61111 10.6667H5.83333V8.88889H7.61111V10.6667ZM7.61111 7.11111H5.83333V5.33333H7.61111V7.11111ZM7.61111 3.55556H5.83333V1.77778H7.61111V3.55556ZM11.1667 10.6667H9.38889V8.88889H11.1667V10.6667ZM11.1667 7.11111H9.38889V5.33333H11.1667V7.11111ZM11.1667 3.55556H9.38889V1.77778H11.1667V3.55556ZM14.7222 14.2222H12.9444V12.4444H14.7222V14.2222ZM14.7222 10.6667H12.9444V8.88889H14.7222V10.6667Z" fill="currentColor"/>
 </svg>
  )
}

export default Hostel