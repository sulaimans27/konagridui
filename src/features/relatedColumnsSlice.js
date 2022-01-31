import { createSlice } from "@reduxjs/toolkit";

// grid columns example
/*
  <ColumnsDirective>
    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
    <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
    <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
  </ColumnsDirective>
*/

// sets main grid columns state
export const relatedColumnsSlice = createSlice({
  name: "relatedGridColumns",
  initialState: {
    relatedGridColumns: null,
  },
  reducers: {
    setRelatedGridColumns: (state, { payload }) => {
      state.relatedGridColumns = payload;
    },
  },
});

export const { setRelatedGridColumns } = relatedColumnsSlice.actions;

export default relatedColumnsSlice.reducer;
