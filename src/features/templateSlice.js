import { createSlice } from "@reduxjs/toolkit";

export const templateSlice = createSlice({
  name: "selectedTemplate",
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
export const { set } = templateSlice.actions;

export default templateSlice.reducer;
