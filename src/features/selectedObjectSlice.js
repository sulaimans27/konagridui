import { createSlice } from "@reduxjs/toolkit";

// {selectedObject: { selectedObject: 'some object'}}}

// sets selected object state
export const selectedObjectSlice = createSlice({
  name: "selectedObject",
  initialState: {
    selectedObject: null,
  },
  reducers: {
    setSelectedObject: (state, { payload }) => {
      state.selectedObject = payload;
    },
  },
});

export const { setSelectedObject } = selectedObjectSlice.actions;

export default selectedObjectSlice.reducer;
