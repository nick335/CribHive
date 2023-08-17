'use client'
import React from 'react'
import styles from './auth.module.css'
import { z} from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import ErrorMessage from '../Utility/ErrorMessage'
import ErrorImage from '../Utility/ErrorImage'

const LoginForm = () => {

  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    email:z.string().email("Invalid email").min(1, "Email is Required"),
    password:z.string().min(1, 'password is Required').min(8, 'minimum of 8 characters')
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
    <form className={`${styles.form}`} onSubmit={handleSubmit(onSubmit)}>
     <div className={`relative`}>
       <input type='email' placeholder='Email Address' className={`${styles.input}`} {...register("email")} />
      {errors.email && <ErrorMessage message={errors.email.message} />}
      {errors.email && <ErrorImage />}
     </div>
     <div className={`relative ${styles.inputGap}`}>
      <input type='password' placeholder='Password' className={`${styles.input}`} {...register("password")}/>
      {errors.password && <ErrorImage /> }
      {errors.password && <ErrorMessage message={errors.password.message} />}
     </div>
     <p className='text-end mt-3 font-bold text-sm font-jhengHei'>Forgot your password?</p>
     <button type='submit' disabled={isSubmitting}  className={`btnPrimary ${styles.formBtn} mt-6`}>Login</button>
    </form>
  )  
}

export default LoginForm