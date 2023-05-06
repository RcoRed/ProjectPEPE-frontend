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
    myNPage: 0,
    myNRecipes: 12,
  },
  reducers: {
    changeSearchParams(state, action) {
      state.searchParams = action.payload;
    },
    setMyDish(state, action) {
      state.myDish = action.payload;
    },
    setMyNPage(state, action) {
      state.myNPage = action.payload;
    },
  },
});

export const { changeSearchParams, setMyDish, setMyNPage } =
  searchParamsSlice.actions;
export const searchParamsReducer = searchParamsSlice.reducer;
