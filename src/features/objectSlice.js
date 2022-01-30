import { createSlice } from "@reduxjs/toolkit";

// sets selected object state
export const objectSlice = createSlice({
  name: "object",
  initialState: {
    object: null,
  },
  reducers: {
    setObject: (state, { payload }) => {
      state.object = payload;
    },
  },
});

export const { setObject } = objectSlice.actions;

export default objectSlice.reducer;
