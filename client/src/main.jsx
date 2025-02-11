import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/index'
import { Provider } from 'react-redux'
import App from './App'
import { StrictMode } from 'react'
// import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router}/>
  // </StrictMode>,
)