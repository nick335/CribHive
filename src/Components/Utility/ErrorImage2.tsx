import React from 'react'
import ResponsiveImage from './ResponsiveImage'
import Error from '../../../public/images/auth/error.svg'

const ErrorImage2 = () => {
  return (
    <ResponsiveImage 
     alt='errorImage'
     url={Error}
     addons=''
     style='error2'
    />
  )
}

export default ErrorImage2