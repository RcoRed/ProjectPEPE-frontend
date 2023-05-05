import { createSlice } from "@reduxjs/toolkit";

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    searchParams: {
      namePart: null,
      myDiet: null,
      myDifficulty: null,
      myToCook: null,
      myIdPerson: null,
    },
    myDish: null,
  },
  reducers: {
    changeSearchParams(state, action) {
      state.searchParams = action.payload;
    },
    setMyDish(state, action) {
      state.myDish = action.payload;
    },
  },
});

export const { changeSearchParams, setMyDish } = searchParamsSlice.actions;
export const searchParamsReducer = searchParamsSlice.reducer;
