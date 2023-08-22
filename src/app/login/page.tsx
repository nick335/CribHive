import LoginForm from '@/Components/Auth/LoginForm'
import OtherSignInOptions from '@/Components/Auth/OtherSignInOptions'
import React from 'react'

const page = () => {
  return (
   <main className='w-[90%] mx-auto mt-6 font-jhengHei sm:max-w-[80%] lg:mt-[3.81rem] lg:w-full lg:mx-0  lg:max-w-none'>
    <div className='lg:h-[42.625rem] lg:w-[55.0625rem] lg:mx-auto lg:shadow-formShadow lg:bg-bgPrimary rounded-lg'>
     <h2 className='text-center text-xl font-bold md:text-2xl lg:pt-[1.63rem]'>Elevate Your Real Estate Success</h2>
      <p className='text-center'>Or, <span className='text-textSecondary md:text-lg'>Register with us to start</span></p>
      <LoginForm />
      <div className='lg:max-w-[44.0625rem] lg:mx-auto'>
        <OtherSignInOptions />
      </div>
      <p className='text-center text-sm mt-4'>By signing in, I accept to the Terms & conditions</p> 
    </div>
   </main>
  )
}

export default page