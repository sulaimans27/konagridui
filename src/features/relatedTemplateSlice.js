import { createSlice } from "@reduxjs/toolkit";

export const relatedTemplateSlice = createSlice({
  name: "relatedTemplate",
  initialState: {
    value: {
      id: null,
    },
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set } = relatedTemplateSlice.actions;

export default relatedTemplateSlice.reducer;
