import { createSlice } from "@reduxjs/toolkit";

// sets template list state
export const templateListSlice = createSlice({
  name: "templateList",
  initialState: {
    templateList: null,
  },
  reducers: {
    setTemplateList: (state, { payload }) => {
      // state.templateList = [];
      state.templateList = payload;
    },
  },
});

export const { setTemplateList } = templateListSlice.actions;

export default templateListSlice.reducer;
