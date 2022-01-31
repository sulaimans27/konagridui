import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import gridData from "./sampleGridData";

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

import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

function DataGrid() {
  const dispatch = useDispatch();

  let pageSettings = { pageSize: 6 };

  let sortSettings = useSelector((state) => state.selectedObject);

  let filterSettings = useSelector((state) => state.filterSettings);

  let groupSettings = useSelector((state) => state.groupSettings);

  let selectedObject = useSelector((state) => state.selectedObject);

  let selectedTemplate = useSelector((state) => state.selectedTemplate);

  let selectedQuery = useSelector((state) => state.selectedQuery);

  // const mainGridColumns = useSelector(state => state.mainGridColumns.mainGridColumns)
  // const gridData = useSelector(state => state.gridData.gridData)

  return (
    <GridComponent
      dataSource={gridData}
      allowPaging={true}
      pageSettings={pageSettings}
      filterSettings={filterSettings}
      allowFiltering={true}
      allowSorting={true}
      sortSettings={sortSettings}
    >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' width='100' textAlign='Right' />
        <ColumnDirective field='CustomerID' width='100' />
        <ColumnDirective field='EmployeeID' width='100' textAlign='Right' />
        <ColumnDirective
          field='Freight'
          width='100'
          format='C2'
          textAlign='Right'
        />
        <ColumnDirective field='ShipCountry' width='100' />
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter, Group]} />
    </GridComponent>
  );
}

export default DataGrid;
