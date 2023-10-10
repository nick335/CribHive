import React from 'react'
import DescriptionImage from '../Properties/DescriptionImage'
import { useFormStore } from '@/store/usePropertyFormStore'
import PropertyPreviewContent from './PropertyPreviewContent'

const PropertyPreview = () => {
 const { images, rent, isApartment, address, bedrooms, description} = useFormStore()

 const imagesUrl = images.map((each) => {
  return URL.createObjectURL(each)
 }) 
  return (
    <div className='relative'>
     <DescriptionImage images={imagesUrl} />
     <PropertyPreviewContent 
        rent={rent}
        isApartment={isApartment}
        address={address}
        bedrooms={bedrooms}
        description={description}
     />
    </div>
  )
}

export default PropertyPreview