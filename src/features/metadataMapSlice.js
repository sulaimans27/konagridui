import { createSlice } from "@reduxjs/toolkit";

// sets metadata state
export const metadataSlice = createSlice({
  name: "metadata",
  initialState: {
    metadata: null,
  },
  reducers: {
    setMetadata: (state, { payload }) => {
      state.metadata = payload;
    },
  },
});

export const { setMetadata } = metadataSlice.actions;

export default metadataSlice.reducer;
