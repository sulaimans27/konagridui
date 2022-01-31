import { createSlice } from "@reduxjs/toolkit";

// sets query list state
export const queryListSlice = createSlice({
  name: "queryList",
  initialState: {
    queryList: null,
  },
  reducers: {
    setQueryList: (state, { payload }) => {
      // state.queryList = [];
      state.queryList = payload;
    },
  },
});

export const { setQueryList } = queryListSlice.actions;

export default queryListSlice.reducer;
