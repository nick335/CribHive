'use client'
import PropertyPreview from '@/Components/ManageProperties/PropertyPreview'
import { useFormStore } from '@/store/usePropertyFormStore'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
  const { formPreview } = useFormStore()
  const router = useRouter()
  
  useEffect(() => {

    if(!formPreview){
      router.replace('/manageproperties/add')
    }

  }, [formPreview])

  if(!formPreview){
    console.log(formPreview)
    return null
  }
  return (
    <PropertyPreview />
  )
}

export default page
