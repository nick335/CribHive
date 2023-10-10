import PropertyForm from '@/Components/ManageProperties/PropertyForm'
import React from 'react'

const page = () => {
  return (
   <main className='w-[90%] lg:w-[55.0625rem] lg:bg-bgPrimary lg:shadow-formShadow mx-auto mt-6 lg:mt-[2.19rem] lg:pt-12 lg:pb-[4.25rem] lg:px-[5.5rem]'>
   <h2 className='text-center text-xl font-bold font-jhengHei lg:text-2xl'>Add A Property</h2>
   <p className='text-center mt-2 font-jhengHei'>Serving as the bridge between Clients and Agents/Landlord</p>
   <PropertyForm />
  </main>
  )
}

export default page