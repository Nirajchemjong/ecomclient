import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catSlice: [],
};
const catSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCatList: (state, { payload }) => {
      state.catSlice = payload;
    },
  },
});

const { reducer, actions } = catSlice;
export const { setCatList } = actions;
export default reducer;
