import { createSlice } from "@reduxjs/toolkit";

export const objectSlice = createSlice({
  name: "selectedObject",
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
export const { set } = objectSlice.actions;

export default objectSlice.reducer;
