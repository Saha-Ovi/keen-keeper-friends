import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'

import { router } from './routes/Router.jsx'
import ActionProvider from './context/ActionProvider.jsx'
import { Bounce, ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActionProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </ActionProvider>
  </StrictMode>,
)
