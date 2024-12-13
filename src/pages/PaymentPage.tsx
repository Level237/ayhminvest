import PaymentForm from '@/components/PaymentForm'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'

export default function PaymentPage() {
  const stripePromise = loadStripe('pk_test_D2szNi6C6hgQ0KR4dkgKl2j0');
  return (
    <div className='bg-gray-900 h-[100vh] flex items-center justify-center'>
       <Elements  stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    </div>
  )
}
