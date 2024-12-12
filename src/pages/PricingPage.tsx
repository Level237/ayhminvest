import PricingCard from '@/components/PricingCard'
import { useLogoutMutation } from '@/services/auth'
import { logoutUser } from '@/store/authSlice'
import { LogOut } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function PricingPage() {
  const [logout]=useLogoutMutation()
  const dispatch=useDispatch();
  const handleLogout=async()=>{
    await logout();
    dispatch(logoutUser())

  }
  return (
    <>
      <section className='bg-gray-900 relative h-[100vh]'>
        <PricingCard/>

        <div className='absolute bottom-8  right-8'>
            <div onClick={handleLogout} className='bg-red-600 cursor-pointer w-14 h-14 border border-white flex justify-center items-center rounded-xl'>
 <LogOut className='text-white'/>
            </div>
        </div>
      </section>
    </>
  )
}
