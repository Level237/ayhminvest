import Loader from '@/components/Loader'
import { useGetUserQuery } from '@/services/auth'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthenticatePage() {
    const {data,isLoading}=useGetUserQuery('Auth')
    const navigate=useNavigate()
    useEffect(()=>{
        if(!isLoading){
            if(data.role_id===1){
                navigate('/dashboard')
            }else{
                navigate('/pricing')
            }
        }
    })
  return (
    <section className='bg-gray-900 w-full h-[100vh]'>
      {isLoading && <Loader/>}
    </section>
  )
}
