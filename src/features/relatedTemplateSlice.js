import { createSlice } from "@reduxjs/toolkit";

// sets related template state
export const relatedTemplateSlice = createSlice({
  name: "relatedTemplate",
  initialState: {
    relatedTemplate: null,
  },
  reducers: {
    setRelatedTemplate: (state, { payload }) => {
      state.relatedTemplate = payload;
    },
  },
});

export const { setRelatedTemplate } = relatedTemplateSlice.actions;

export default relatedTemplateSlice.reducer;
