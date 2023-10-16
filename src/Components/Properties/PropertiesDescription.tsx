import React from 'react'
import DescriptionImage from './DescriptionImage'
import DescriptionContent from './DescriptionContent'
import LocationOnMap from './LocationOnMap'
import { StaticImageData } from 'next/image'


interface propertiesProps{
  images: string[] | StaticImageData[],
  address: string,
  rent: string,
  bedrooms: string,
  isApartment: boolean,
  vidURL: string,
  description: string,
}

const PropertiesDescription = ({images, address, rent, bedrooms, isApartment, description, vidURL }: propertiesProps) => {
  return (
    <div className='relative'>
     <DescriptionImage images ={images} />
     <DescriptionContent 
        rent={rent}
        description={description}
        isApartment={isApartment}
        address={address}
        bedrooms={bedrooms}
        vidURL={vidURL}
     />
     <LocationOnMap />
    </div>
  )
}

export default PropertiesDescription