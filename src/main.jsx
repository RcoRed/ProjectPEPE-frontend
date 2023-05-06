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
import FullRecipe, { loader as fullLoader } from "./components/full-recipe";
import UserPage from "./components/user-page";
import PersonalInfo from "./components/personal-info";
import TasteComponent, {
  loader as tasteComponentLoader,
} from "./components/taste-component";
import FoodStorage, {
  loader as foodStorageLoader,
} from "./components/food-storage";
import { Provider } from "react-redux";
import { store } from "./store";

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
          {
            path: "/recipe",
            element: <FullRecipe />,
            loader: fullLoader,
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
  {
    path: "/user",
    element: <UserPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            //path default figlio di App
            index: true,
            element: <PersonalInfo />,
            //il loader verrà eseguito ogni volta che sarà fatto una richiesta con questo path
          },
          {
            path: "/user/taste-manager",
            element: <TasteComponent />,
            //il loader verrà eseguito ogni volta che sarà fatto una richiesta con questo path
            loader: tasteComponentLoader,
          },
          {
            path: "/user/food-storage",
            element: <FoodStorage />,
            loader: foodStorageLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
