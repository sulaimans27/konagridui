import { createSlice } from "@reduxjs/toolkit";

// sets related object state
export const relatedObjectSlice = createSlice({
  name: "relatedObject",
  initialState: {
    relatedObject: null,
  },
  reducers: {
    setRelatedObject: (state, { payload }) => {
      state.relatedObject = payload;
    },
  },
});

export const { setRelatedObject } = relatedObjectSlice.actions;

export default relatedObjectSlice.reducer;
