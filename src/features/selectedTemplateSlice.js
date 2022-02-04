import { createSlice } from "@reduxjs/toolkit";

// sets selected template state
export const selectedTemplateSlice = createSlice({
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

export const { setSelectedTemplate } = selectedTemplateSlice.actions;

export default selectedTemplateSlice.reducer;
