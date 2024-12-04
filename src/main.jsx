import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Router/Routes'
import AuthProvider from './FireBase/AuthProvider'



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
 <RouterProvider router={routes}/>
 </AuthProvider>
  </StrictMode>,
)
