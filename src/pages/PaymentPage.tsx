import PaymentForm from '@/components/PaymentForm'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import visa from "../assets/visa.png"
import { useLogoutMutation } from '@/services/auth';
import { useDispatch } from 'react-redux';
import { logoutUser } from '@/store/authSlice';
import { LogOut } from 'lucide-react';


export default function PaymentPage() {
  const stripePromise = loadStripe('pk_test_D2szNi6C6hgQ0KR4dkgKl2j0');
  const [logout]=useLogoutMutation()
  const dispatch=useDispatch();
  const handleLogout=async()=>{
    await logout("Auth");
    dispatch(logoutUser())

  }
  return (
    <div className='bg-gray-900 h-[100vh] flex-col flex items-center justify-center'>
      <img src={visa} className="w-32 h-32" alt="" />
      
       <Elements  stripe={stripePromise}>
            <PaymentForm />
        </Elements>
        <div className='fixed bottom-8  right-8'>
            <div onClick={handleLogout} className='bg-red-600 cursor-pointer w-14 h-14 border border-white flex justify-center items-center rounded-xl'>
 <LogOut className='text-white'/>
            </div>
        </div>
    </div>
  )
}
