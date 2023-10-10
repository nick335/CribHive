import React from 'react'



const useValidateImages = (images: File[]) => {
 const allowedTypes = ["image/jpeg", "image/gif", "image/png", "image/jpeg"]
  for (let i=0; i < images.length; i++ ){
   const image = images[i]
   if(!allowedTypes.includes(image.type)){
    return false
   }
  }
  return true
}

export default useValidateImages