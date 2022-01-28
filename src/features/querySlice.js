import { createSlice } from "@reduxjs/toolkit";

export const querySlice = createSlice({
  name: "selectedQuery",
  initialState: {
    value: {
      id: null,
    },
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set } = querySlice.actions;

export default querySlice.reducer;
