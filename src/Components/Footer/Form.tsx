"use client"
import React from 'react'
import styles from './footer.module.css'
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import ErrorImage from '../Utility/ErrorImage'
import ErrorMessage from '../Utility/ErrorMessage'
import ErrorImage2 from '../Utility/ErrorImage2'

const Form = () => {

  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    email:z.string().email("Invalid Email").min(1, "Email is Required"),
    name: z.string().min(1, 'please fill out name'),
    text: z.string().min(1, 'fill out text field')
  })
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data)
  }
  return (
    <div className='mt-10 font-jhengHei lg:mt-0 lg:absolute lg:left-2/4 lg:-translate-x-[43%]'>
     <h3 className='text-lg font-bold text-bgLight lg:text-xl'>Contact us</h3>
     <form className='mt-4 md:max-w-[600px] lg:min-w-[414px] lg:max-w-[414px]' onSubmit={handleSubmit(onSubmit)}>
      <div className='relative mb-6 lg:w-ful'>
        <input className={`${styles.input}`} type='text' placeholder='Name' {...register("name")} />
        { errors.name && <ErrorImage /> }
        { errors.name && <ErrorMessage message={errors.name.message } /> }
      </div>
      <div className='relative mb-6 lg:w-ful'>
        <input className={`${styles.input}`} type='email' placeholder='Email'  {...register("email")}/>
        { errors.email && <ErrorImage /> }
        { errors.email && <ErrorMessage message={errors.email.message } /> }
      </div>
      <div className='relative mb-6 lg:w-ful'>
        <textarea placeholder='Message'  className={`${styles.input} min-h-[79px] max-h-[200px]`} {...register("text")} />
        { errors.text && <ErrorMessage message={errors.text.message} /> }
        { errors.text && <ErrorImage2 /> }
      </div>
      <button type='submit' disabled={isSubmitting} className='block ml-auto h-10 w-32 bg-btnhover rounded-lg text-sm'>Send</button>
     </form>
    </div>
  )
}

export default Form