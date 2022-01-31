import { createSlice } from "@reduxjs/toolkit";

// filter settings example
/*
let filterOptions = {
  columns: [
    {
      field: "ShipCity",
      matchCase: false,
      operator: "startswith",
      predicate: "and",
      value: "reims",
    },
    {
      field: "ShipName",
      matchCase: false,
      operator: "startswith",
      predicate: "and",
      value: "Vins et alcools Chevalier",
    },
  ],
};
*/

// sets main grid filter state
export const filterSettingsSlice = createSlice({
  name: "filterSettings",
  initialState: {
    filterSettings: null,
  },
  reducers: {
    setFilterSettings: (state, { payload }) => {
      state.filterSettings = payload;
    },
  },
});

export const { setFilterSettings } = filterSettingsSlice.actions;

export default filterSettingsSlice.reducer;
