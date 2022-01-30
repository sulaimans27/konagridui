import { createSlice } from "@reduxjs/toolkit";

// sets selected query state
export const querySlice = createSlice({
  name: "query",
  initialState: {
    query: null,
  },
  reducers: {
    setQuery: (state, { payload }) => {
      state.query = payload;
    },
  },
});

export const { setQuery } = querySlice.actions;

export default querySlice.reducer;
