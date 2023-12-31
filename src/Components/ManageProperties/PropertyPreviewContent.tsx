import React, { useState } from 'react'
import { ToWords } from 'to-words'
import VideoModal from '../Utility/videomodal/VideoModal'

interface props {
 address: string,
 rent: string,
 bedrooms: string,
 isApartment: boolean,
 description: string,
 video?: File
}

const PropertyPreviewContent = ({address, rent, bedrooms, isApartment, description, video }: props) => {
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
    <div className='mt-8 w-full lg:w-[90%] lg:ml-auto lg:h-[10rem] xl:h-[1.75rem] lg:bg-bgPrimary lg:shadow-contactShadow lg:flex lg:items-center lg:justify-center'>
     <button className='w-full h-12 rounded-lg font-jhengHei font-bold bg-btnPrimary text-textSecondary ease-in duration-100 transition-all hover:bg-btnhover hover:text-headerPrimary lg:w-[80%] cursor-pointer'>POST</button>
    </div>
   </div>
   {watchVideo && <VideoModal vid={video} close={CloseVideoModal} />}
  </div>
  )
}

export default PropertyPreviewContent