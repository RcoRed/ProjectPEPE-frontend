import { configureStore } from "@reduxjs/toolkit";
import { userReducer, changeUser } from "./slices/loggedUser";
import {
  searchParamsReducer,
  changeSearchParams,
  setMyDish,
} from "./slices/searchParams";

const store = configureStore({
  reducer: {
    user: userReducer,
    searchParams: searchParamsReducer,
  },
});

export { store, changeUser, changeSearchParams, setMyDish };
