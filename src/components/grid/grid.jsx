import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

// import gridData from "./sampleGridData";

import { GridField } from "./gridFunctions";

import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
} from "@syncfusion/ej2-react-grids";

import {
  Inject,
  Page,
  PageSettingsModel,
  Sort,
  SortSettingsModel,
} from "@syncfusion/ej2-react-grids";

function DataGrid() {
  const dispatch = useDispatch();

  let pageSettings = { pageSize: 25 };

  // get grid state
  let sortSettings = useSelector((state) => state.selectedObject.sortSettings);

  let filterSettings = useSelector(
    (state) => state.filterSettings.filterSettings
  );

  let groupSettings = useSelector((state) => state.groupSettings.groupSettings);

  let selectedObject = useSelector(
    (state) => state.selectedObject.selectedObject
  );

  let selectedTemplate = useSelector(
    (state) => state.selectedTemplate.selectedTemplate
  );

  let selectedQuery = useSelector((state) => state.selectedQuery.selectedQuery);

  let templateFields = useSelector(
    (state) => state.templateFieldList.templateFieldList
  );

  let gridData = useSelector((state) => state.gridData.gridData);

  const metadata = useSelector((state) => state.metadata.metadata);
  let metadataFields = null;
  if (metadata) {
    metadataFields = metadata.get(selectedObject);
  }

  // const mainGridColumns = useSelector(state => state.mainGridColumns.mainGridColumns)
  // const gridData = useSelector(state => state.gridData.gridData)

  let hasTemplateFields = useRef(false);
  let userInfo = useSelector((state) => state.userInfo.userInfo);

  if (
    selectedObject !== null &&
    selectedTemplate !== null &&
    selectedQuery !== null &&
    templateFields !== null &&
    templateFields.length > 0 &&
    gridData !== null
  ) {
    console.log("Rendering grid with columns");
    console.log(`Selected object >> ${selectedObject}`);
    console.log(`Selected template >> ${selectedTemplate}`);
    console.log(`Selected query >> ${selectedQuery}`);
    console.log("Template fields >>");
    console.log(templateFields);
    return (
      <GridComponent
        dataSource={gridData}
        allowPaging={true}
        // pageSettings={pageSettings}
        allowPaging={false}
        filterSettings={filterSettings}
        allowFiltering={true}
        allowSorting={true}
        sortSettings={sortSettings}
      >
        {templateFields.map((field) => {
          return <GridField key={field.id} item={field} />;
        })}

        <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>
    );
  } else {
    console.log("Rendering grid without columns");
    console.log(`Selected object >> ${selectedObject}`);
    console.log(`Selected template >> ${selectedTemplate}`);
    console.log(`Selected query >> ${selectedQuery}`);
    return (
      <GridComponent
        allowPaging={true}
        pageSettings={pageSettings}
        filterSettings={filterSettings}
        allowFiltering={true}
        allowSorting={true}
        sortSettings={sortSettings}
      >
        <ColumnsDirective></ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>
    );
  }
}

export default DataGrid;
