import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./components/login-form";
import RegistrationForm from "./components/registration-form";
import Cards, { loader as cardsLoader } from "./components/cards";
import ErrorPage from "./error-page";
import RecipeRedirect from "./components/recipe-redirect";

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
            index: true,
            element: <Cards />,
            loader: cardsLoader,
          },
          {
            path: "/:myDish",
            element: <RecipeRedirect />,
          },
          //{
          //   path: "first",
          //   element: <Cards />,
          // },
          // {
          //   path: "second",
          //   element: <Cards />,
          // },
          // {
          //   path: "dessert",
          //   element: <Cards />,
          // },
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
