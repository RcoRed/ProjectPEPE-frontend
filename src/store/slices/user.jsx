import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({ 
    name: "user",
    initialState: { myUser: null },
    reducers: { changeUser(state, action){
        state.myUser = action.payload;
    } }
 });

 export const userReducer = userSlice.reducer;
 export const { changeUser } = userSlice.actions;