import { configureStore } from "@reduxjs/toolkit";
import { userReducer, changeUser } from "./slices/loggedUser";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { store, changeUser };
