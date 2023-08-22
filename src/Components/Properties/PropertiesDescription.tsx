import React from 'react'
import DescriptionImage from './DescriptionImage'
import DescriptionContent from './DescriptionContent'
import LocationOnMap from './LocationOnMap'

const PropertiesDescription = () => {
  return (
    <div className='relative'>
     <DescriptionImage />
     <DescriptionContent />
     <LocationOnMap />
    </div>
  )
}

export default PropertiesDescription