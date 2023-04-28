import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from './components/login-form';
import RegistrationForm from './components/registration-form';
import Appetizer from './components/appetizer';
import First from './components/first';
import Second from './components/second';
import Dessert from './components/dessert';
import Home from './components/home';
import SearchRecipe from './components/searchRecipe';


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        children: [
          {
            index: true,
            element: <Home/>
          },
          {
            path: "appetizer",
            element: <Appetizer />
          },
          {
            path: "first",
            element: <First />
          },
          {
            path: "second",
            element: <Second />
          },
          {
            path: "dessert",
            element: <Dessert />
          },
          {
            path: "searchrecipe",
            element: <SearchRecipe />
          }
        ]        
      }
    ]      
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
