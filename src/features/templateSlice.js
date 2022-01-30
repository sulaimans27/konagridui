import { createSlice } from "@reduxjs/toolkit";

// sets selected template state
export const templateSlice = createSlice({
  name: "template",
  initialState: {
    template: null,
  },
  reducers: {
    setTemplate: (state, { payload }) => {
      state.template = payload;
    },
  },
});

export const { setTemplate } = templateSlice.actions;

export default templateSlice.reducer;
