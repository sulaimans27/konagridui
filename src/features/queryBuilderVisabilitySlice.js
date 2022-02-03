import { createSlice } from "@reduxjs/toolkit";

// sets selected app state
export const queryBuilderVisabilitySlice = createSlice({
  name: "queryBuilderVisible",
  initialState: {
    queryBuilderVisible: false,
  },
  reducers: {
    setQueryBuilderVisible: (state, { payload }) => {
      state.queryBuilderVisible = payload;
    },
  },
});

export const { setQueryBuilderVisible } = queryBuilderVisabilitySlice.actions;

export default queryBuilderVisabilitySlice.reducer;
