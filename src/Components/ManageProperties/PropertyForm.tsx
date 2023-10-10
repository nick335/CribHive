'use client'
import React from 'react'
import styles from './manageproperties.module.css'
import Apartment from '@/Components/Utility/icons/Apartment'
import Hostel from '@/Components/Utility/icons/Hostel'
import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import VideoReview from './VideoReview'
import PicturesReview from './PicturesReview'
import { Listbox } from '@headlessui/react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import useValidateImages from '@/hooks/useValidateImages'
import useValidateVideo from '@/hooks/useValidateVideo'
import { useFormValidation } from '@/hooks/usePropertyFormValidation'
import ErrorMessage from '../Utility/ErrorMessage'
import ErrorImage from '../Utility/ErrorImage'
import ErrorImage2 from '../Utility/ErrorImage2'
import { useFormStore, FormState } from '@/store/usePropertyFormStore'
import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'

const PropertyForm = () => {
  const router = useRouter() 
  const { setisApartment, isApartment, setisHostel, setField, address, images, setImages, description, rent, video, bedrooms, authorizeFormPreview, restrictFormPreview, formPreview } = useFormStore()
  type city = {
    id: number,
    name: string
  }
 const [previewError, setPreviewError] = useState({
  image: {
    error: false,
    message: ''
  },
  video: {
    error: false,
    message: ''
  },
 })
 const [ selectedCity, setSelectedCity]= useState< city | null >(null)
 const picRef = useRef<HTMLInputElement>(null)
 const vidRef = useRef<HTMLInputElement>(null)
 const { validateVideo} = useValidateVideo()
 const { handleSubmit, validationErrors } = useFormValidation()

 const city = [
  { id: 1, name: 'YABA'},
  { id: 2, name: 'LEKKI'},
  { id: 3, name: 'OSHODI'},
  { id: 4, name: 'KETU'},
  { id: 5, name: 'RONKE'},
 ]
function handleClick(ref: React.RefObject<HTMLInputElement | null> ){
  if(ref.current){
    ref.current.click()
  }
}
// handle Selecting Images
function handleImageSelection(e : React.ChangeEvent<HTMLInputElement>){
  restrictFormPreview(formPreview)
  if(e.target.files){
    const filesArray = Array.from(e.target.files)
    if(filesArray.length !== 0){
      const validation = useValidateImages(filesArray)
      console.log(validation)
      if(validation){
        setPreviewError((prev) => {
          return {
            ...prev,
            image:{
              error: false,
              message: ''
            }
          }
        })
        const imagesarr: Array<File> = filesArray
        const updatedImagesarr = [...images, ...imagesarr]
        setImages(updatedImagesarr)
      }else{
        setPreviewError((prev) => {
          return {
            ...prev,
            image: {
              error: true,
              message: 'Invalid Image format: .png, .jpeg, .gif,'
            }
          }
        })
      }
    } 
  }
}

//format with spaces
const formatWithSpaces = (value: string) => {
  // Add a space after every three digits
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const handleNumberInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  restrictFormPreview(formPreview)
  const { name, value } = event.target;
  const sanitizedValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  setField(sanitizedValue, name as keyof FormState)
};

const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  restrictFormPreview(formPreview)
  const { name, value } = event.target;
  setField(value, name as keyof FormState)
};

//handling selecting Video
 async function handleVideoSelection(e: React.ChangeEvent<HTMLInputElement>){
  restrictFormPreview(formPreview)
  const file = e.target.files && e.target.files[0]
  const name = e.target.name
  if(file){
    if(file?.length !== 0){
     const validation = await validateVideo(file)

      console.log(validation.isValid)
      if( validation.isValid){
        setPreviewError((prev) => {
          return {
            ...prev,
            video: {
              error: false,
              message: ''
            }
          }
        })
        setField(file, name as keyof FormState)
      }else {
        setPreviewError((prev) => {
          return {
            ...prev,
            video: {
              error: true,
              message: validation.error ? validation.error : ''
            }
          }
        })
      }
      
    }
  }
}

const handleFormSubmit = async (event: React.FormEvent) => {
  event.preventDefault();
  setPreviewError((prev) => {
    return {
      ...prev,
      image:{
        error: false,
        message: ''
      },
      video:{
        error: false,
        message: ''
      },
    }
  })
  const cityname = 'city'
  if(selectedCity?.name){
    setField(selectedCity?.name, cityname as keyof FormState)
  }
  
  const completeFormData:any = {
        address: address,
        rent: rent,
        description: description,
        bedrooms: bedrooms,
        city: selectedCity?.name,
        image: images,
        video: video,
  }

  await handleSubmit(completeFormData, () => {
    console.log(completeFormData)
    authorizeFormPreview()
    router.push('/manageproperties/add/preview')
  }, () => {
    console.log(validationErrors)
  });
};

  return (
    <div className='mt-9'>
     <div className='flex gap-x-3 justify-center items-center'>
      <div className={`${styles.btnDiv} ${isApartment ? styles.btnDivActive : styles.btnDivDefault}`} onClick={setisApartment} >
       Apartment
       <Apartment active={isApartment} />
      </div>
      <div className={`${styles.btnDiv} ${!isApartment ? styles.btnDivActive : styles.btnDivDefault} `} onClick={setisHostel}>
       Hostel
       {/* passing the inverse of isApartment state because that represents the hostel state */}
       <Hostel active={!isApartment} />
      </div>
     </div>
     <form onSubmit={handleFormSubmit}>
      <div>
        <div className={`${styles.inputGap} relative`}>
          <input name='address' onChange={handleInputChange} className={`${styles.input}`} value={address} type='text' placeholder=' Address' />
          { validationErrors.address && <ErrorMessage message={validationErrors.address} /> }
          { validationErrors.address && <ErrorImage /> }
        </div>
        <div className='relative'>
         <Listbox value={selectedCity} onChange={setSelectedCity} >
          {/* <Listbox.Label>City/Area</Listbox.Label> */}
          <Listbox.Button className={`h-12 rounded-lg px-4 py-2.5 w-full border flex items-center justify-between mt-6 ${ 
            validationErrors.city ? 'border-error' : 'border-black'
          } `}>
            <span>{ selectedCity ? selectedCity.name : 'City/Area' }</span>
            <MdOutlineKeyboardArrowDown className='text-black text-base' />
          </Listbox.Button>
          <Listbox.Options className='absolute mt-3 bg-bgPrimary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-60 overflow-auto rounded-md z-10 w-[90%]'>
            {city.map((city) => (
              <Listbox.Option 
                key={city.id} 
                value={city} 
                className={({ selected }) => 
                  `cursor-default py-2 pl-6 uppercase ${
                    selected ? 'bg-bgOrange/30' : 'text-gray-900'
                  }`
                }
              >
                {city.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
         </Listbox>
         { validationErrors && <ErrorMessage message={validationErrors.city} /> }
        </div>
      </div>
      <div className={`flex  items-center gap-x-6 ${styles.inputGap}`}>
       <div className='w-full relative'>
        <input value={formatWithSpaces(rent)} name='rent' type='text' className={`${styles.input}`} onChange={handleNumberInputChange} placeholder='Rent' />
        { validationErrors.rent && <ErrorImage /> }
        { validationErrors.rent && <ErrorMessage message={validationErrors.rent} /> }
       </div>
       <div className='w-full relative'>
        <input value={bedrooms} name='bedrooms' onChange={handleNumberInputChange} type='text' className={`${styles.input}`} placeholder={isApartment ? 'Bedroom(s)' : 'No. Man room'} />
        { validationErrors.bedrooms && <ErrorImage /> }
        { validationErrors.bedrooms && <ErrorMessage message={validationErrors.bedrooms} /> }
       </div>
      </div>
      <div className={`relative ${styles.inputGap}`}>
        <textarea value={description} name='description' onChange={handleInputChange} placeholder='Property Description' className={`min-h-[5.875rem] pt-3 ${styles.input}`} />
        { validationErrors.description && <ErrorImage2 /> }
        { validationErrors.description && <ErrorMessage message={validationErrors.description} /> }
      </div>
      <h3 className='mt-8 font-bold'>Media <span className='font-normal'>(Add Pictures and Videos (optional))</span></h3>
      <div className={`relative w-full flex justify-between px-4 h-12 bg-transparent border border-black cursor-pointer items-center rounded-lg mt-2 ${previewError.image.error || validationErrors.image ? 'border-error' : 'border-black' } `} onClick={() => handleClick(picRef)}>
        <input type='file' multiple  className='hidden' ref={picRef} onChange={handleImageSelection} id='picInput' />
        <p>Pictures</p>
        <FontAwesomeIcon icon={faPlus} />
        { previewError.image.error || validationErrors.image ? <ErrorMessage message={`${
          previewError.image.error ? previewError.image.message : validationErrors.image
        }`} /> : <></>  }
      </div>
      {/* image Preview */}
      {images.length > 0 &&  <PicturesReview images={images}  /> }
      <div className={`relative w-full flex justify-between px-4 h-12 bg-transparent border ${previewError.video.error || validationErrors.video ? 'border-error' : 'border-black' } cursor-pointer items-center rounded-lg ${styles.inputGap}`} onClick={() => handleClick(vidRef)} >
        <input name='video' type='file' className='hidden' ref={vidRef} onChange={handleVideoSelection} />
        <p>Videos</p>
        <FontAwesomeIcon icon={faPlus} />
        { previewError.video.error || validationErrors.video ? <ErrorMessage message={`${
          previewError.video.error ? previewError.video.message : validationErrors.video
        }`} /> : <></>  }
      </div>
      {/* vid previw */}
      { video && <VideoReview vid={video} /> }
      <button type='submit' className={`btnPrimary mt-8 ${styles.formBtn}`}>Preview</button>
     </form>
    </div>
  )
}

export default PropertyForm;