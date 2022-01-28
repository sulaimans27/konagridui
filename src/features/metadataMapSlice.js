import { createSlice } from "@reduxjs/toolkit";

export const metadataMapSlice = createSlice({
  name: "metadataMap",
  initialState: {
    value: {},
  },
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set } = metadataMapSlice.actions;

export default metadataMapSlice.reducer;
