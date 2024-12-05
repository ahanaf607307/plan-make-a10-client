import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import CampProvider from './Components/Campaigns/CampProvider'
import AuthProvider from './FireBase/AuthProvider'
import './index.css'
import routes from './Router/Routes'
import 'animate.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
<CampProvider>
<RouterProvider router={routes}/>
</CampProvider>
 </AuthProvider>
  </StrictMode>,
)
