import { createSlice } from "@reduxjs/toolkit";

// sets selected query state
export const querySlice = createSlice({
  name: "selectedQuery",
  initialState: {
    selectedQuery: null,
  },
  reducers: {
    setSelectedQuery: (state, { payload }) => {
      state.selectedQuery = payload;
    },
  },
});

export const { setSelectedQuery } = querySlice.actions;

export default querySlice.reducer;
