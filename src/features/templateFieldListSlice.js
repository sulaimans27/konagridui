import { createSlice } from "@reduxjs/toolkit";

// sets template list state
export const templateFieldListSlice = createSlice({
  name: "templateFieldList",
  initialState: {
    templateFieldList: null,
  },
  reducers: {
    setTemplateFieldList: (state, { payload }) => {
      // state.templateList = [];
      state.templateFieldList = payload;
    },
  },
});

export const { setTemplateFieldList } = templateFieldListSlice.actions;

export default templateFieldListSlice.reducer;
