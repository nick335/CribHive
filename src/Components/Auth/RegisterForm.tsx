"use client"
import React from 'react'
import OtherSignInOptions from './OtherSignInOptions'
import styles from './auth.module.css'
import { z} from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import ErrorMessage from '../Utility/ErrorMessage'
import ErrorImage from '../Utility/ErrorImage'

const RegisterForm = () => {

  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    firstname: z.string().min(1, 'first name is required'),
    lastname:z.string().min(1, 'last name is required'),
    email:z.string().email("Invalid email").min(1, "Email is Required"),
    password:z.string().min(1, 'password is Required').min(8, 'minimum of 8 characters'),
    tel:z.string().regex(/^\d+$/, 'invalid phone number').min(11, 'telephone number required').max(11, 'telephone number invalid')
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
    <div className='sm:max-w-[80%] mx-auto lg:max-w-[44.0625rem]'>
     <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex  items-center gap-x-6 mt-8'>
       <div className='relative w-full'>
        <input type='text' className={`${styles.input}`} placeholder='First Name' {...register("firstname")} />
        {errors.firstname && <ErrorImage />}
        {errors.firstname && <ErrorMessage message={errors.firstname.message} />}
       </div>
       <div className='relative w-full'>
        <input type='text' className={`${styles.input}`} placeholder='Last Name' {...register("lastname")}/>
        { errors.lastname && <ErrorImage /> }
        { errors.lastname && <ErrorMessage message={errors.lastname.message} /> }
       </div>
      </div>
      <div className={`relative ${styles.inputGap}`}>
       <input className={`${styles.input}`} type='email' placeholder='Email Address' {...register("email")}/>
       {errors.email && <ErrorImage /> }
       {errors.email && <ErrorMessage message={errors.email.message} />}
      </div>
      <div className={`relative ${styles.inputGap}`}>
       <input className={`${styles.input}`} type='password' placeholder='Password' {...register("password")} />
       { errors.password && <ErrorImage /> }
       { errors.password && <ErrorMessage message={errors.password.message} /> }
      </div>
      <div className={`relative ${styles.inputGap}`}>
       <input className={`${styles.input}`} type='tel' placeholder='Phone Number' {...register("tel")}/>
       { errors.tel && <ErrorMessage message={errors.tel.message} /> }
       { errors.tel && <ErrorImage /> }
      </div>
      <button type='submit' disabled={isSubmitting} className={`btnPrimary mt-8 ${styles.formBtn}`}>Continue</button>
     </form>
     <OtherSignInOptions />
     <p className='text-center text-sm mt-4'>By Registering in, I accept to the Terms & conditions</p>
    </div>
  )
}

export default RegisterForm