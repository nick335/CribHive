import RegisterLayout from '@/Components/Auth/RegisterLayout'
import React from 'react'

const page = () => {
  return (
    <main className='w-[90%] mx-auto mt-6 font-jhengHei lg:mt-12'>
     <h2 className='text-center text-xl font-bold md:text-2xl'>Your Journey Begins Here</h2>
     <p className='text-center'>Or, <span className='text-textSecondary md:text-lg'>Sign in to your account</span></p>
     <RegisterLayout />
    </main>
  )
}

export default page