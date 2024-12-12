import { useLoginMutation } from '@/services/auth'
import { authTokenChange } from '@/store/authSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [user,setUser]=useState('');
  const [pwd,setPwd]=useState('');
  const [errMsg,setErrMsg]=useState('');
  const [login,{isLoading,isError,error}]=useLoginMutation()
  const dispatch=useDispatch();
    const navigate=useNavigate()

    const handleSubmit=async(e:any)=>{
      e.preventDefault();

         
          const userObject={phone_number:user,password:pwd}
          console.log(userObject)
          const userData=await login(userObject)
          //console.log(userData.data.refresh_token)
          console.log(userData)
          const userState={
              'refreshToken':userData.data.refresh_token,
              'accessToken':userData.data.access_token
          }
          
          dispatch(authTokenChange(userState))
          
          setUser('')
          setPwd('')
          navigate('/pricing')

  }

  const handleUserInput=(e:any)=>setUser(e.target.value)
const handlePwdInput=(e:any)=>setPwd(e.target.value)
  return (
    <section className="">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          AYHMINVEST   
      </a>
      <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4   md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight text-center tracking-tight  md:text-2xl text-white">
                  Connexion
              </h1>
              {isError && <div className='rounded-sm text-red-500 text-center w-[100%]'>{error?.error}</div>}
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                  <div className='flex items-start flex-col'>
                      <label  className="block mb-2 text-sm font-medium text-white">Numéro de téléphone</label>
                      <input name="phone_number" type="text"   onChange={handleUserInput} id="email" className=" border rounded-lg   block w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Entrez votre numéro de téléphone" />
                  </div>
                  <div className='flex items-start flex-col'>
                      <label  className="block mb-2 text-sm font-medium text-white">Mot de passe</label>
                      <input name="password" type="password" onChange={handlePwdInput}  id="password" placeholder="Entrez votre mot de passe"  className=" border rounded-lg focus:ring-primary-600 text-white focus:border-primary-600 block w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"  />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label  className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium hover:underline text-gray-300">Mot de passe oublié?</a>
                  </div>
                  <button disabled={isLoading || user==="" || pwd===""} type="submit" className={`w-full ${isLoading ||user===""||pwd==="" ? "bg-blue-400 opacity-35" : ""} text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}>{isLoading ? "Loading..." : "Connexion" }</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
  )
}
