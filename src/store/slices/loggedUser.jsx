import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    changeUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { changeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
