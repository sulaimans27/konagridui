import { createSlice } from "@reduxjs/toolkit";

// sets object list state
export const objectListSlice = createSlice({
  name: "objectList",
  initialState: {
    objectList: null,
  },
  reducers: {
    setObjectList: (state, { payload }) => {
      // state.objectList = [];
      state.objectList = payload;
    },
  },
});

export const { setObjectList } = objectListSlice.actions;

export default objectListSlice.reducer;
