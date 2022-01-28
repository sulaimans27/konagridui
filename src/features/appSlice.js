import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "selectedApp",
  initialState: {
    value: {
      id: null,
    },
  },
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set } = appSlice.actions;

export default appSlice.reducer;
