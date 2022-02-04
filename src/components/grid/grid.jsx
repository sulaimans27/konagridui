import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

// import gridData from "./sampleGridData";

import { gridField } from "./gridFunctions";

import {
  ColumnChooser,
  ColumnDirective,
  ColumnsDirective,
  ColumnMenu,
  Edit,
  ExcelExport,
  Filter,
  FilterSettingsModel,
  ForeignKey,
  Inject,
  GridComponent,
  Group,
  GroupSettingsModel,
  Page,
  PageSettingsModel,
  PdfExport,
  Resize,
  Reorder,
  Sort,
  SortSettingsModel,
  Toolbar,
  ToolbarItems,
} from "@syncfusion/ej2-react-grids";

function DataGrid() {
  const dispatch = useDispatch();

  let pageSettings = { pageSize: 25 };

  // store grid columns
  const gridColumns = useRef(null);

  // get filter state
  let filterSettings = useSelector(
    (state) => state.filterSettings.filterSettings
  );

  // get grid data
  let gridData = useSelector((state) => state.gridData.gridData);

  // get group state
  let groupSettings = useSelector((state) => state.groupSettings.groupSettings);

  // get metadata
  const metadata = useSelector((state) => state.metadata.metadata);
  let metadataFields = null;
  if (metadata) {
    metadataFields = metadata.get(selectedObject);
  }

  // get selected object state
  let selectedObject = useSelector(
    (state) => state.selectedObject.selectedObject
  );

  // get selected template state
  let selectedTemplate = useSelector(
    (state) => state.selectedTemplate.selectedTemplate
  );

  // get selected query state
  let selectedQuery = useSelector((state) => state.selectedQuery.selectedQuery);

  // get sort state
  let sortSettings = useSelector((state) => state.selectedObject.sortSettings);

  // get template fields
  let templateFields = useSelector(
    (state) => state.templateFields.templateFields
  );

  // create grid columns when selectedTemplate changes
  useEffect(() => {
    if (templateFields) {
      const cols = [];
      templateFields.forEach((t) => {
        const col = gridField(t);
        cols.push(col);
      });
      gridColumns.current = cols;
    } else {
      gridColumns.current = [];
    }
  });

  let hasTemplateFields = useRef(false);
  let userInfo = useSelector((state) => state.userInfo.userInfo);

  if (gridColumns && gridData) {
    console.log("Rendering grid with columns");
    console.log(`Selected object >> ${selectedObject}`);
    console.log(`Selected template >> ${selectedTemplate}`);
    console.log(`Selected query >> ${selectedQuery}`);
    console.log(`Grid columns >> ${gridColumns}`);
    console.log(templateFields);
    return (
      <GridComponent
        allowPaging={false}
        allowExcelExport={true}
        allowFiltering={true}
        allowGrouping={true}
        allowPdfExport={true}
        allowSorting={true}
        allowReordering={true}
        allowResizing={true}
        columns={gridColumns.current}
        dataSource={gridData}
        filterSettings={filterSettings}
        pageSettings={pageSettings}
        showColumnMenu={true}
        sortSettings={sortSettings}
      >
        <Inject
          services={[
            ColumnChooser,
            ColumnMenu,
            Edit,
            ExcelExport,
            Filter,
            ForeignKey,
            Group,
            // Page,
            PdfExport,
            Resize,
            Reorder,
            Sort,
            Toolbar,
          ]}
        />
      </GridComponent>
    );
  } else {
    console.log("Rendering grid without columns");
    console.log(`Selected object >> ${selectedObject}`);
    console.log(`Selected template >> ${selectedTemplate}`);
    console.log(`Selected query >> ${selectedQuery}`);
    return <GridComponent></GridComponent>;
  }
}

export default DataGrid;
