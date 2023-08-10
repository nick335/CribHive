import React from 'react'
import ContactInfo from './ContactInfo'
import SocialIcons from './SocialIcons'
import Form from './Form'
import Copyrights from './Copyrights'

const Footer = () => {
  return (
   <footer className='mt-[4.5rem] bg-bgSecondary border-b-[10px] border-primaryBorder lg:border-b-[20px]'>
    <div className='w-[90%] mx-auto pt-8 lg:pt-16'>
      <div className='lg:flex lg:items-start lg:justify-between'>
        <ContactInfo />
        <SocialIcons />
        <Form />
      </div>
      <Copyrights />
    </div>
   </footer>
  )
}

export default Footer