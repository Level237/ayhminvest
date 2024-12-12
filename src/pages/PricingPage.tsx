import PricingCard from '@/components/PricingCard'
import { LogOut } from 'lucide-react'
import React from 'react'

export default function PricingPage() {
  return (
    <>
      <section className='bg-gray-900 relative h-[100vh]'>
        <PricingCard/>

        <div className='absolute bottom-8  right-8'>
            <div className='bg-red-600 cursor-pointer w-14 h-14 border border-white flex justify-center items-center rounded-xl'>
 <LogOut className='text-white'/>
            </div>
        </div>
      </section>
    </>
  )
}
