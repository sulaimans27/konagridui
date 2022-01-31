import { createSlice } from "@reduxjs/toolkit";

// sets sidebar state
export const sidebarSlice = createSlice({
  name: "sidebarStatus",
  initialState: {
    sidebarStatus: null,
  },
  reducers: {
    setSidebarStatus: (state, { payload }) => {
      state.sidebarStatus = payload;
    },
  },
});

export const { setSidebarStatus } = sidebarSlice.actions;

export default sidebarSlice.reducer;
