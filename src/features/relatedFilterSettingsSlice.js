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

// sets related grid filter state
export const relatedGridFilterSlice = createSlice({
  name: "relatedFilterSettings",
  initialState: {
    relatedFilterSettings: null,
  },
  reducers: {
    setRelatedFilterSettings: (state, { payload }) => {
      state.relatedFilterSettings = payload;
    },
  },
});

export const { setRelatedFilterSettings } = relatedGridFilterSlice.actions;

export default relatedGridFilterSlice.reducer;
