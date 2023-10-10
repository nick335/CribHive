import React from 'react'
import { useState, useCallback } from 'react'

interface videoValidationResult {
 isValid: boolean;
 error?: string;
}

const supportedFormats = ['.mp4', '.avi', '.mkv', '.mov', '.mkv' ];
const maxDuration  = 180

const useValidateVideo = () => {

 const validateVideo = useCallback(async (file: File) => {
  const fileExtension = file.name.toLowerCase().slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2)
  console.log(fileExtension)
  if(!supportedFormats.includes(`.${fileExtension}`)){
   return { isValid: false, error:`Invalid video formats: .mp4, .avi, .mkv, .mov, .wmv` };
  }

  const video = document.createElement('video')
  video.src= URL.createObjectURL(file)

  return new Promise<videoValidationResult>((resolve) => {
   video.onloadedmetadata = () => {
    console.log(video.duration)
    if(video.duration > maxDuration){
     resolve({isValid: false, error: `video duration exceeds 3 minutes`})
    }else{
     resolve({ isValid:true })
    }
   };

   video.onerror = () => {
    resolve({ isValid: false, error: 'Error Occured while processing the image.' })
   }
  })
 }, [])

 return {  validateVideo }
}

export default useValidateVideo