import { createSlice } from "@reduxjs/toolkit";

// group settings example
/*
let groupOptions = {
    columns: ['CustomerID', 'ShipCity']
  };
*/

// sets main grid group state
export const relatedGridGroupSlice = createSlice({
  name: "relatedGroupSettings",
  initialState: {
    relatedGroupSettings: null,
  },
  reducers: {
    setRelatedGroupSettings: (state, { payload }) => {
      state.relatedGroupSettings = payload;
    },
  },
});

export const { setRelatedGroupSettings } = relatedGridGroupSlice.actions;

export default relatedGridGroupSlice.reducer;
