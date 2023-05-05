import { configureStore } from "@reduxjs/toolkit";
import { userReducer, changeUser } from "./slices/user";

const store = configureStore({
    reducer: { user: userReducer },
});

export { store, changeUser };