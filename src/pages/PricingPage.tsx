import PricingCard from '@/components/PricingCard'
import { useLogoutMutation } from '@/services/auth'
import { logoutUser } from '@/store/authSlice'
import { LogOut } from 'lucide-react'
import { useDispatch } from 'react-redux'

export default function PricingPage() {
  const [logout]=useLogoutMutation()
  const dispatch=useDispatch();
  const handleLogout=async()=>{
    await logout("Auth");
    dispatch(logoutUser())

  }
  return (
    <>
      <section className='bg-gray-900 h-[100vh] max-sm:h-[100%]'>
        <PricingCard/>

        <div className='fixed bottom-8  right-8'>
            <div onClick={handleLogout} className='bg-red-600 cursor-pointer w-14 h-14 border border-white flex justify-center items-center rounded-xl'>
 <LogOut className='text-white'/>
            </div>
        </div>
      </section>
    </>
  )
}
