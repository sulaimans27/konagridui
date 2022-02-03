import { createSlice } from "@reduxjs/toolkit";

// sets selected app state
export const selectedAppSlice = createSlice({
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

export const { setSelectedApp } = selectedAppSlice.actions;

export default selectedAppSlice.reducer;
