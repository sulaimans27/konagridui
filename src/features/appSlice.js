import { createSlice } from "@reduxjs/toolkit";

// sets selected app state
export const appSlice = createSlice({
  name: "selectedApp",
  initialState: {
    selectedApp: null,
  },
  reducers: {
    setSelectedApp: (state, { payload }) => {
      state.selectedApp = payload;
    },
  },
});

export const { setSelectedApp } = appSlice.actions;

export default appSlice.reducer;
