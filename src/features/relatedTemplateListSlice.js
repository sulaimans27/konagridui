import { createSlice } from "@reduxjs/toolkit";

// sets template list state
export const relatedTemplateListSlice = createSlice({
  name: "templateList",
  initialState: {
    relatedTemplateList: null,
  },
  reducers: {
    setRelatedTemplateList: (state, { payload }) => {
      state.relatedTemplateList = payload;
    },
  },
});

export const { setRelatedTemplateList } = relatedTemplateListSlice.actions;

export default relatedTemplateListSlice.reducer;
