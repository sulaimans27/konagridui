import { createSlice } from "@reduxjs/toolkit";

export const relatedObjectSlice = createSlice({
  name: "relatedObject",
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
export const { set } = relatedObjectSlice.actions;

export default relatedObjectSlice.reducer;
