import React from 'react'
import ResponsiveImage from '../Utility/ResponsiveImage'
import { StaticImageData } from 'next/image'
import PreviewDelete from '../../../public/images/utility/PreviewDelete.svg'
import styles from './manageproperties.module.css'
import { useFormStore } from '@/store/usePropertyFormStore'

interface props {
 images: Array<File>
}

const PicturesReview = ({images}:props) => {
  const { deleteImage } = useFormStore()
 const imgsUrl: Array< string | StaticImageData > = images.map((img) => {
  return URL.createObjectURL(img)
 })
  return (
    <div className='mt-6 flex flex-wrap gap-x-[0.6rem] gap-y-4'>
     {imgsUrl.map((each, idx) => {
      return <div key={idx} className='relative w-fit h-fit'>
               <ResponsiveImage 
                alt='image'
                url={each}
                addons={styles.previewImageAddon}
                style={styles.previewImage}
               />
               <div className='w-fit h-fit absolute cursor-pointer -top-2 -right-1' onClick={() => deleteImage(idx)} >
                <ResponsiveImage
                 alt='delete'
                 url={PreviewDelete}
                 addons=''
                 style={styles.previewImageDelete}
                />
               </div>
             </div>
     })}
    </div>
  )
}

export default PicturesReview