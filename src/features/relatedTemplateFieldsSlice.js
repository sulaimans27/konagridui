import { createSlice } from "@reduxjs/toolkit";

// sets template list state
export const relatedTemplateFieldsSlice = createSlice({
  name: "relatedTemplateFields",
  initialState: {
    relatedTemplateFields: null,
  },
  reducers: {
    setRelatedTemplateFields: (state, { payload }) => {
      state.relatedTemplateFields = payload;
    },
  },
});

export const { setRelatedTemplateFields } = relatedTemplateFieldsSlice.actions;

export default relatedTemplateFieldsSlice.reducer;
