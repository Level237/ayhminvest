import React from 'react'
import { Link } from 'react-router-dom'

export default function PricingCard() {

  return (
    <section className="">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Designed for business teams like yours</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-5 sm:gap-6 xl:gap-4 lg:space-y-0">
       
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center  rounded-lg border  shadow border-gray-600 xl:p-8 bg-gray-800 text-white">
              <h3 className="mb-4 text-2xl font-semibold">Palier 1</h3>
              <p className="font-light sm:text-md text-gray-400">Best option for personal use & for your next project.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-2xl font-extrabold">1-100 €</span>
                  
              </div>
             
            <Link to="/payment/with/stripe/?min=1&max=100">
            
              <a className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Payer maintenant</a>
              </Link>
          </div>
          
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center  rounded-lg border  shadow border-gray-600 xl:p-8 bg-gray-800 text-white">
              <h3 className="mb-4 text-2xl font-semibold">Palier 2</h3>
              <p className="font-light sm:text-md text-gray-400">Best option for personal use & for your next project.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-2xl font-extrabold">101-300 €</span>
                  
              </div>
             
            
              <Link to="/payment/with/stripe/?min=101&max=300">
            
              <a className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Payer maintenant</a>
              </Link>
          </div>
         
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center  rounded-lg border  shadow border-gray-600 xl:p-8 bg-gray-800 text-white">
              <h3 className="mb-4 text-2xl font-semibold">Palier 3</h3>
              <p className="font-light sm:text-md text-gray-400">Best option for personal use & for your next project.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-2xl font-extrabold">301-500 €</span>
                  
              </div>
             
            
              <Link to="/payment/with/stripe/?min=301&max=500">
            
              <a className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Payer maintenant</a>
              </Link>
          </div>
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center  rounded-lg border  shadow border-gray-600 xl:p-8 bg-gray-800 text-white">
              <h3 className="mb-4 text-2xl font-semibold">Palier 4</h3>
              <p className="font-light sm:text-md text-gray-400">Best option for personal use & for your next project.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-2xl font-extrabold">501-800 €</span>
                  
              </div>
             
            
              <Link to="/payment/with/stripe/?min=501&max=800">
            
              <a className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Payer maintenant</a>
              </Link>
          </div>
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center  rounded-lg border  shadow border-gray-600 xl:p-8 bg-gray-800 text-white">
              <h3 className="mb-4 text-2xl font-semibold">Palier 5</h3>
              <p className="font-light sm:text-md text-gray-400">Best option for personal use & for your next project.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-2xl font-extrabold">801-1500 €</span>
                  
              </div>
             
            
              <Link to="/payment/with/stripe/?min=801&max=1500">
            
              <a className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Payer maintenant</a>
              </Link>
          </div>
      </div>
  </div>
</section>
  )
}
