import { createSlice } from "@reduxjs/toolkit";

// sets selected template state
export const templateSlice = createSlice({
  name: "selectedTemplate",
  initialState: {
    selectedTemplate: null,
  },
  reducers: {
    setSelectedTemplate: (state, { payload }) => {
      state.selectedTemplate = payload;
    },
  },
});

export const { setSelectedTemplate } = templateSlice.actions;

export default templateSlice.reducer;
