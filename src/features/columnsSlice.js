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
export const columnsSlice = createSlice({
  name: "gridColumns",
  initialState: {
    gridColumns: null,
  },
  reducers: {
    setGridColumns: (state, { payload }) => {
      state.gridColumns = payload;
    },
  },
});

export const { setGridColumns } = columnsSlice.actions;

export default columnsSlice.reducer;
