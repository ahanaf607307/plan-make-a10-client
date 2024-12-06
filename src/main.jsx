import 'animate.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './FireBase/AuthProvider'
import './index.css'
import routes from './Router/Routes'



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>

<RouterProvider router={routes}/>

 </AuthProvider>
  </StrictMode>,
)
