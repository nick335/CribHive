import React from 'react'
import ResponsiveImage from '../Utility/ResponsiveImage'
import { StaticImageData } from 'next/image'
import PreviewDelete from '../../../public/images/utility/PreviewDelete.svg'
import styles from './addproperty.module.css'

interface props {
 images: Array<string | StaticImageData>
 cancel: (idx: number) => void
}

const PicturesReview = ({images, cancel}:props) => {
 console.log(images)
  return (
    <div className='mt-4 flex flex-wrap gap-x-[0.6rem] gap-y-4'>
     {images.map((each, idx) => {
      return <div key={idx} className='relative w-fit h-fit'>
               <ResponsiveImage 
                alt='image'
                url={each}
                addons={styles.previewImageAddon}
                style={styles.previewImage}
               />
               <div className='w-fit h-fit absolute cursor-pointer -top-2 -right-1' onClick={() => cancel(idx)}  >
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