import { createSlice } from "@reduxjs/toolkit";

// sets template list state
export const relatedTemplateListSlice = createSlice({
  name: "templateList",
  initialState: {
    templateList: null,
  },
  reducers: {
    setRelatedTemplateList: (state, { payload }) => {
      state.templateList = payload;
    },
  },
});

export const { setRelatedTemplateList } = relatedTemplateListSlice.actions;

export default relatedTemplateListSlice.reducer;
