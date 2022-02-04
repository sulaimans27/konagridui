import { createSlice } from "@reduxjs/toolkit";

// sets related template state
export const selectedRelatedTemplateSlice = createSlice({
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

export const { setRelatedTemplate } = selectedRelatedTemplateSlice.actions;

export default selectedRelatedTemplateSlice.reducer;
