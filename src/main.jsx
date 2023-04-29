import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import LoginForm from "./components/login-form";
import RegistrationForm from "./components/registration-form";
import RecipesCards, {
  loader as cardsLoader,
} from "./components/recipes-cards";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            //path default figlio di App
            index: true,
            element: <RecipesCards />,
            //il loader verrà eseguito ogni volta che sarà fatto una richiesta con questo path
            loader: cardsLoader,
          },
          {
            path: "/:myDish",
            element: <RecipesCards />,
            //il loader verrà eseguito ogni volta che sarà fatto una richiesta con questo path
            loader: cardsLoader,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegistrationForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
