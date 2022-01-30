import { createSlice } from "@reduxjs/toolkit";

// sets object list state
export const objectListSlice = createSlice({
  name: "objectList",
  initialState: {
    objectList: null,
  },
  reducers: {
    setObject: (state, { payload }) => {
      state.objectList = payload;
    },
  },
});

export const { setObjectList } = objectListSlice.actions;

export default objectListSlice.reducer;
