import React from 'react'
import PropertiesDescription from '@/Components/Properties/PropertiesDescription'
import Demo2 from '../../../../public/images/properties/model2.jpg'
import Demo3 from '../../../../public/images/properties/model3.jpg'


const page = () => {
  const images = [Demo3, Demo2, Demo3, Demo2]
  const rent = '100000'
  const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi modi iure quidem quo, saepe, sapiente quis sed est recusandae tempore alias error deserunt enim totam numquam molestiae eius porro. Magnam!'
  const isApartment= false
  const bedrooms = '3'
  const address = 'Kolawole Street, off Seven avenue Akoka'
  const vidUrl = '../../../../public/video/CountriesApp.mp4'

  return (
    <main className='mt-2'>
      <PropertiesDescription 
        images={images}
        rent={rent}
        description={description}
        isApartment={isApartment}
        address={address}
        bedrooms={bedrooms}
        vidURL={vidUrl}
      />
    </main>
 )  
}

export default page