import React from 'react'

interface props{
  message: string | undefined
}

const ErrorMessage = ({message}: props) => {
  return (
    <p className='font-inter text-error text-xs absolute left-0 -bottom-[17px]'>{message }</p>
  )
}

export default ErrorMessage