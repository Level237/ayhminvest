import React from 'react'

export default function LoginForm() {
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
              <form className="space-y-4 md:space-y-6" action="#">
                  <div className='flex items-start flex-col'>
                      <label  className="block mb-2 text-sm font-medium text-white">Numéro de téléphone</label>
                      <input type="text" name="email" id="email" className=" border rounded-lg   block w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Entrez votre numéro de téléphone" required/>
                  </div>
                  <div className='flex items-start flex-col'>
                      <label  className="block mb-2 text-sm font-medium text-white">Mot de passe</label>
                      <input type="password" name="password" id="password" placeholder="Entrez votre mot de passe"  className=" border rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"  required/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label  className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium hover:underline text-gray-300">Mot de passe oublié?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Connexion</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
  )
}
