import AddPropertyForm from '@/Components/AddProperty/AddPropertyForm'
import React from 'react'

const page = () => {
  return (
    <main className='w-[90%] mx-auto mt-6'>
     <h2 className='text-center text-xl font-bold'>Add A Property</h2>
     <p className='text-center mt-2'>Serving as the bridge between Clients and Agents/Landlord</p>
     <AddPropertyForm />
    </main>
  )
}

export default page