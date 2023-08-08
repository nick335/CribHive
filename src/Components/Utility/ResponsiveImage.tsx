import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface props {
 url: string | StaticImageData
 style: string
 alt: string
 addons: string | undefined
}

const ResponsiveImage = ({url, style, alt, addons}: props) => {
  return (
    <div className={style}>
     <Image 
      className={`${addons} object-fill`}
      alt={alt}
      src={url}
      fill={true}
     />
    </div>
  )
}

export default ResponsiveImage