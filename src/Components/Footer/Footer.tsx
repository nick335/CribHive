import React from 'react'
import ContactInfo from './ContactInfo'

const Footer = () => {
  return (
   <footer className='mt-[4.5rem] bg-bgSecondary border-b-[10px] border-primaryBorder '>
    <div className='w-[90%] mx-auto pt-8'>
      <ContactInfo />
    </div>
   </footer>
  )
}

export default Footer