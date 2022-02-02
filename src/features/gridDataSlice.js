import { createSlice } from "@reduxjs/toolkit";

// sets selected app state
export const gridDataSlice = createSlice({
  name: "gridData",
  initialState: {
    gridData: null,
  },
  reducers: {
    setGridData: (state, { payload }) => {
      state.gridData = payload;
    },
  },
});

export const { setGridData } = gridDataSlice.actions;

export default gridDataSlice.reducer;
