import RegisterLayout from '@/Components/Auth/RegisterLayout'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <main className='w-[90%] mx-auto mt-6 font-jhengHei lg:mt-[3.81rem] lg:w-full lg:mx-0 '>
    <div className='lg:w-[55.0625rem] lg:mx-auto lg:shadow-formShadow lg:bg-bgPrimary rounded-lg' >
      <h2 className='text-center text-xl font-bold md:text-2xl lg:pt-12'>Your Journey Begins Here</h2>
      <p className='text-center'>Or, <span className='text-textSecondary md:text-lg cursor-pointer'>
        <Link href='/login'>Sign in to your account</Link></span></p>
      <RegisterLayout />
    </div>
     
    </main>
  )
}

export default page