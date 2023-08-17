import LoginForm from '@/Components/Auth/LoginForm'
import OtherSignInOptions from '@/Components/Auth/OtherSignInOptions'
import React from 'react'

const page = () => {
  return (
   <main className='w-[90%] mx-auto mt-6 font-jhengHei sm:max-w-[80%] lg:max-w-[44.0625rem] lg:mt-12'>
    <h2 className='text-center text-xl font-bold md:text-2xl'>Elevate Your Real Estate Success</h2>
    <p className='text-center'>Or, <span className='text-textSecondary md:text-lg'>Register with us to start</span></p>
    <LoginForm />
    <OtherSignInOptions />
    <p className='text-center text-sm mt-4'>By signing in, I accept to the Terms & conditions</p>
   </main>
  )
}

export default page