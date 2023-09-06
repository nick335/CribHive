'use client'
import { faHome, faHotel, faPlus, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import styles from './addproperty.module.css'
import Apartment from '../Utility/icons/Apartment'
import Hostel from '../Utility/icons/Hostel'
import PictureNotificattion from './PictureNotificattion'
import VideoNotification from './VideoNotification'
import { string } from 'zod'




const AddPropertyForm = () => {
 let [isApartment, setIsApartment] = useState(true)
 const picRef = useRef<HTMLInputElement>(null)
 const vidRef = useRef<HTMLInputElement>(null)
 //show notifcation
 const [displayNotification, setDisplayNotifaction ] = useState({
  picture: false,
  video: false,
 })
 // trigger pictue and video inputs 
 const [triggerInputs, setTriggerInputs] = useState({
  picture: false,
  video: false,
 })
 // selectedImages Array
 const [selectedImages, setSelectedImages] = useState< Array<ImageData | string>>([])

// display picture notification
 function togglePicNotification(){
  setDisplayNotifaction(prev => {
    return {
      ...prev,
      picture: !prev.picture
    }
  })
 }

 // display video notification
 function toggleVidNotification(){
  setDisplayNotifaction(prev => {
    return {
      ...prev,
      video: !prev.video
    }
  })
 }
 
 useEffect(() => {
  if(triggerInputs.picture === true){
    picRef.current?.click()
    setTriggerInputs(prev => {
      return{
        ...prev,
        picture: false
      }
    })
  }
 }, [triggerInputs.picture])

//
// function execute(){
//   picRef.current?.click() 
// }

// function sleep(){
//   return new Promise(resolve => setTimeout(resolve, 1000))
// }


function gotIt(para: string){
  // checking which got it button is being clicked
  if(para === 'Vid'){
    toggleVidNotification()
  }else if(para === 'Pic'){
    // close notification
   setDisplayNotifaction((prev) => {
    return{
      ...prev,
      picture: false
    }
   })
  //  document.getElementById('picInput')?.click()
  //  sleep().then(() => { setTriggerInputs(prev => { return {
  //   ...prev,
  //   picture: true
  //  }}) })

    // setTimer()
    // initiate image input
  }
}

// handle Selecting Images
function handleImageSelection(e : React.ChangeEvent<HTMLInputElement>){
  togglePicNotification()
  // e.preventDefault();
  if(e.currentTarget.files){
    if(e.currentTarget.files?.length !== 0){
      const images: Array<ImageData | string> = []
      for (let i=0; i < e.currentTarget.files?.length; i++){
        images.push(URL.createObjectURL(e.currentTarget.files[i]))
      }
      setSelectedImages(imgfiles => [...imgfiles, ...images])
    }
  }
}
// select Apartement
 function setIsApartmentTrue(){
  setIsApartment(true)
 }
// select Hostel 
 function setIsApartmentFalse(){
  setIsApartment(false)
 }
  return (
    <div className='mt-9'>
     <div className='flex gap-x-3 justify-center items-center'>
      <div className={`${styles.btnDiv} ${isApartment ? styles.btnDivActive : styles.btnDivDefault}`} onClick={setIsApartmentTrue} >
       Apartment
       <Apartment active={isApartment} />
      </div>
      <div className={`${styles.btnDiv} ${!isApartment ? styles.btnDivActive : styles.btnDivDefault} `} onClick={setIsApartmentFalse}>
       Hostel
       {/* passing the inverse of isApartment state because that represents the hostel state */}
       <Hostel active={!isApartment} />
      </div>
     </div>
     <form>
     <div className={`${styles.inputGap}`}>
       <input className={`${styles.input}`} type='text' placeholder=' Address' />
      </div>
      <div className={`flex  items-center gap-x-6 ${styles.inputGap}`}>
       <div className='w-full'>
        <input type='text' className={`${styles.input}`} placeholder='Rent' />
       </div>
       <div className='w-full'>
        <input type='text' className={`${styles.input}`} placeholder='Bedroom(s)' />
       </div>
      </div>
      <div className={`relative ${styles.inputGap}`}>
        <textarea placeholder='Property Description' className={`min-h-[5.875rem] pt-3 ${styles.input}`} />
      </div>
      <h3 className='mt-8 font-bold'>Media <span className='font-normal'>(Add Pictures and Videos (optional))</span></h3>
      <div className={`w-full flex justify-between px-4 h-12 bg-transparent border border-black cursor-pointer items-center rounded-lg mt-2`} onClick={togglePicNotification}>
        <input type='file' multiple  className='hidden' ref={picRef} onChange={handleImageSelection} id='picInput' />
        <p>Pictures</p>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className={`w-full flex justify-between px-4 h-12 bg-transparent border border-black cursor-pointer items-center rounded-lg ${styles.inputGap}`} onClick={toggleVidNotification} >
        <input type='file' className='hidden' />
        <p>Videos</p>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <button className={`btnPrimary mt-8 ${styles.formBtn}`}>Post</button>
     </form>
     <PictureNotificattion display={displayNotification.picture} gotIt={gotIt} />
     <VideoNotification display={displayNotification.video} gotIt={gotIt}  />
    </div>
  )
}

export default AddPropertyForm