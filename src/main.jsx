import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'

import { router } from './routes/Router.jsx'
import ActionProvider from './context/ActionProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActionProvider>
      <RouterProvider router={router}></RouterProvider>
    </ActionProvider>
  </StrictMode>,
)
