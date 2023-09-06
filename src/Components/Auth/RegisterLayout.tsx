import React from 'react'
import RegisterForm from './RegisterForm'
import RegisterAdditionalForm from './RegisterAdditionalForm'

const RegisterLayout = () => {
  return (
    <div className='lg:pb-16'>
     <RegisterForm />
     {/* <RegisterAdditionalForm /> */}
    </div>
  )
}

export default RegisterLayout