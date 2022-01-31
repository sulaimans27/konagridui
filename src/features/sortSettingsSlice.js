import { createSlice } from "@reduxjs/toolkit";

// example sort setting
/*
  let sortSettings = {
    columns: [{ field: "EmployeeID", direction: "Ascending" }],
  };
*/

// sets main grid sort state
export const sortSettingsSlice = createSlice({
  name: "sortSettings",
  initialState: {
    sortSettings: null,
  },
  reducers: {
    setSortSettings: (state, { payload }) => {
      state.sortSettings = payload;
    },
  },
});

export const { setSortSettings } = sortSettingsSlice.actions;

export default sortSettingsSlice.reducer;
