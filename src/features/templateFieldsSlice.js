import { createSlice } from "@reduxjs/toolkit";

// sets template list state
export const templateFieldsSlice = createSlice({
  name: "templateFields",
  initialState: {
    templateFields: null,
  },
  reducers: {
    setTemplateFields: (state, { payload }) => {
      state.templateFields = payload;
    },
  },
});

export const { setTemplateFields } = templateFieldsSlice.actions;

export default templateFieldsSlice.reducer;
