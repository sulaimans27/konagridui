import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebarOpen",
  initialState: {
    value: false,
  },
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set } = sidebarSlice.actions;

export default sidebarSlice.reducer;
