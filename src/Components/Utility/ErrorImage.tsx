import React from 'react'
import ResponsiveImage from './ResponsiveImage'
import Error from '../../../public/images/auth/error.svg'

const ErrorImage = () => {
  return (
    <ResponsiveImage 
     url={Error}
     alt='error'
     addons=''
     style='error'
    />
  )
}

export default ErrorImage