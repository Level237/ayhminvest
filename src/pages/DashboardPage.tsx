import { useLogoutMutation } from '@/services/auth';
import { useGetPriceQuery } from '@/services/payment';
import { logoutUser } from '@/store/authSlice';
import { LogOut } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
    const [logout]=useLogoutMutation()
    const {data,isLoading}=useGetPriceQuery('Pay')
  const dispatch=useDispatch();
  const handleLogout=async()=>{
    await logout();
    dispatch(logoutUser())

  }
  console.log(data)
  return (
    <section className='bg-gray-900  h-[100vh] max-sm:h-[100%]'>
        <div className='flex flex-col gap-12 justify-center items-center'>
        <h2 className='text-white text-2xl mt-12 font-bold'>dashboard Administrateur</h2>
            <div className='bg-gray-700 flex flex-col items-center p-6 rounded-xl'>
                <h2 className='text-white text-lg'>Solde Principale</h2>
                <div>
                <h2 className='text-blue-600 text-3xl font-bold'>{!isLoading && data} Euros</h2>
                </div>
            </div>
            <div>
      <Link to="#">
            
            <a className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Retrait en USDT</a>
            </Link>
      </div>
        </div>
     
      <div className='fixed bottom-8  right-8'>
            <div onClick={handleLogout} className='bg-red-600 cursor-pointer w-14 h-14 border border-white flex justify-center items-center rounded-xl'>
 <LogOut className='text-white'/>
            </div>
        </div>
    </section>
  )
}
