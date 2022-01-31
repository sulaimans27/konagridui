import { createSlice } from "@reduxjs/toolkit";

// example sort setting
/*
  let sortSettings = {
    columns: [{ field: "EmployeeID", direction: "Ascending" }],
  };
*/

// sets related grid sort state
export const relatedGridSortSlice = createSlice({
  name: "relatedSortSettings",
  initialState: {
    relatedSortSettings: null,
  },
  reducers: {
    setRelatedSortSettings: (state, { payload }) => {
      state.relatedSortSettings = payload;
    },
  },
});

export const { setRelatedSortSettings } = relatedGridSortSlice.actions;

export default relatedGridSortSlice.reducer;
