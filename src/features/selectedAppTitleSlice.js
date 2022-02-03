import { createSlice } from "@reduxjs/toolkit";

// sets selected app title state
export const selectedAppTitleSlice = createSlice({
  name: "selectedAppTitle",
  initialState: {
    selectedAppTitle: "KonaGrid",
  },
  reducers: {
    setSelectedAppTitle: (state, { payload }) => {
      state.selectedAppTitle = payload;
    },
  },
});

export const { setSelectedAppTitle } = selectedAppTitleSlice.actions;

export default selectedAppTitleSlice.reducer;
