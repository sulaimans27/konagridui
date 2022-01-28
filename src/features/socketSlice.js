import { createSlice } from "@reduxjs/toolkit";

export const socketSlice = createSlice({
  name: "socket",
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
export const { set } = socketSlice.actions;

export default socketSlice.reducer;
