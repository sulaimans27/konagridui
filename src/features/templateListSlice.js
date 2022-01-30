import { createSlice } from "@reduxjs/toolkit";

// sets template list state
export const templateListSlice = createSlice({
  name: "templateList",
  initialState: {
    templateList: null,
  },
  reducers: {
    setObject: (state, { payload }) => {
      state.templateList = payload;
    },
  },
});

export const { setTemplateList } = templateListSlice.actions;

export default templateListSlice.reducer;
