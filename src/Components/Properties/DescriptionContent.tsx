'use client'
import React, { useState } from 'react'
import ContactUs from './ContactUs'
// import writtenNumber from "written-number";
import { ToWords } from 'to-words'
import VideoModal from '../Utility/videomodal/VideoModal'

interface props {
  address: string,
  rent: string,
  bedrooms: string,
  isApartment: boolean,
  description: string,
  vidURL: string
}

const DescriptionContent = ({address, rent, bedrooms, isApartment, description, vidURL }: props) => {
  const [watchVideo, setWatchVideo] = useState(false)

  function OpenVideoModal(){
    setWatchVideo(true)
  }
  function CloseVideoModal(){
    setWatchVideo(false)
  }
  const converter = new ToWords({
    localeCode: 'en-US'
  })
  const rentword = converter.convert(parseInt(rent))
  return (
    <div className='mt-6 w-[90%] mx-auto font-jhengHei lg:flex lg:mt-10 lg:flex-nowrap lg:gap-x-20 xl:gap-x-36'>
     <div className='lg:w-1/2'>
      <h2 className='text-headerPrimary font-bold text-lg lg:text-3xl xl:text-[2rem]'> { isApartment ? `${bedrooms} Bedroom Apartment` : `${bedrooms} Man Room` } </h2>
      <p className='mt-3 lg:mt-6 lg:text-xl xl:text-2xl text-headerPrimary'><span className='font-bold pr-0.5'>Location:</span> {address}</p>
      <p className='mt-3 lg:text-xl xl:text-2xl text-headerPrimary'><span className='font-bold pr-0.5'>Rent:</span>{rentword} Naira per annum</p>
      <h4 className='text-headerPrimary lg:text-xl xl:text-2xl font-bold mt-3'>Description</h4>
      <p className='mt-1 lg:mt-2 xl:mt-4 lg:text-lg text-headerPrimary'>{description}</p>
     </div>
     <div className='lg:w-1/2'>
      <h3 className='font-inter cursor-pointer lg:w-fit lg:ml-auto px-3 py-[0.4rem] text-xs border border-secondaryBorder rounded-[0.25rem] absolute top-3 right-[5%] lg:static' onClick={OpenVideoModal}>Watch Video</h3>
      <ContactUs />
     </div>
     {watchVideo && <VideoModal vid={vidURL} close={CloseVideoModal} />}
    </div>
  )
}

export default DescriptionContent