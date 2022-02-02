import { createSlice } from "@reduxjs/toolkit";

// sets sidebar state
export const sidebarSizeSlice = createSlice({
  name: "sidebarSize",
  initialState: {
    sidebarSize: "small",
  },
  reducers: {
    setSidebarSize: (state, { payload }) => {
      state.sidebarSize = payload;
    },
  },
});

export const { setSidebarSize } = sidebarSizeSlice.actions;

export default sidebarSizeSlice.reducer;
