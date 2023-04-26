import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from './components/login-form';
import RegistrationForm from './components/registration-form';


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/login",
    element: <LoginForm />
  },
  {
    path:"/register",
    element: <RegistrationForm />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
