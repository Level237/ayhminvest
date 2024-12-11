import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {


  return (
    <Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>
    

    
  )
}

export default App
