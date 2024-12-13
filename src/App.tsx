import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { Provider } from 'react-redux'
import { store } from './store'
import { NuqsAdapter } from 'nuqs/adapters/react-router'

function App() {


  return (
    <Provider store={store}>
      <NuqsAdapter>
        <RouterProvider router={routes}/>
        </NuqsAdapter>
    </Provider>
    

    
  )
}

export default App
