import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

// import gridData from "./sampleGridData";

// import * as gridFn from "./gridFunctions";

import { ToastUtility } from "@syncfusion/ej2-react-notifications";

import {
  ColumnChooser,
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
  PdfExport,
  Resize,
  Reorder,
  Sort,
  SortSettingsModel,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

function DataGrid() {
  // get component reference
  let id = "mainGrid";

  let gridObj = GridComponent;

  let toastMsg = useRef(null);

  function showToast(title, content, type, timeout, showCloseButton) {
    let cssVal = null;

    switch (type) {
      case "Warning!": {
        cssVal = "e-toast-warning";
        break;
      }
      case "Success!": {
        cssVal = "e-toast-success";
        break;
      }
      case "Error!": {
        cssVal = "e-toast-danger";
        break;
      }
      case "Information!": {
        cssVal = "e-toast-info";
        break;
      }
      default: {
        cssVal = "e-toast-info";
      }
    }

    toastMsg = ToastUtility.show({
      title: title,
      content: content,
      timeOut: timeout,
      cssClass: cssVal,
      showCloseButton: showCloseButton,
      position: { X: "Right", Y: "Top" },
      buttons: [
        {
          model: { content: "Close" },
          click: () => {
            toastClose();
          },
        },
      ],
    });
  }

  function toastClose() {
    toastMsg.hide("All");
  }

  let pageSettings = { pageSize: 25 };

  // store grid columns
  let gridColumns = useRef(null);

  // get filter state
  let filterSettings = useSelector(
    (state) => state.filterSettings.filterSettings
  );

  // get grid data
  let gridData = useSelector((state) => state.gridData.gridData);

  // get group state
  let groupSettings = useSelector((state) => state.groupSettings.groupSettings);

  // get metadata
  const objectMetadata = useSelector((state) => state.objectMetadata);

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

  // get userInfo state
  let userInfo = useSelector((state) => state.userInfo.userInfo);

  // create grid columns when selectedTemplate changes
  let relation = null;
  let relationNameField = null;

  // add async attribute to useEffect
  // so we can await functions
  useEffect(() => {
    // async functions need to be defined inside useEffect
    const gridField = async (templateField, fieldLabel) => {
      const sfdcDataType = templateField.datatype;

      switch (sfdcDataType) {
        case "boolean": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "boolean",
            editType: "checkbox",
            autoFit: true,
            displayAsCheckBox: true,
            width: "150",
            textAlign: "Left",
          };
        }
        case "comboBox": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "string",
            editType: "dropdownlist",
            autoFit: true,
            width: "150",
            textAlign: "Left",
          };
        }
        case "currency": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "number",
            editType: "numerictextbox",
            autoFit: true,
            format: "C2",
            width: "150",
            textAlign: "Left",
          };
        }
        case "date": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "date",
            editType: "datepicker",
            autoFit: true,
            width: "150",
            textAlign: "Right",
            format: "yMd",
          };
        }
        case "datetime": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "datetime",
            editType: "datepicker",
            autoFit: true,
            width: "150",
            textAlign: "Right",
            format: "yMd",
          };
        }
        case "decimal": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "number",
            editType: "numerictextbox",
            autoFit: true,
            format: "C2",
            width: "150",
            textAlign: "Left",
          };
        }
        case "double": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "number",
            editType: "numerictextbox",
            autoFit: true,
            width: "150",
            textAlign: "Left",
          };
        }
        case "email": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "string",
            editType: "textbox",
            autoFit: true,
            width: "150",
            textAlign: "Left",
          };
        }
        case "encryptedstring": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "string",
            editType: "textbox",
            autoFit: true,
            width: "150",
            textAlign: "Left",
          };
        }
        case "id": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "string",
            editType: "textbox",
            autoFit: true,
            width: "150",
            textAlign: "Left",
          };
        }
        case "int": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "number",
            editType: "numerictextbox",
            autoFit: true,
            width: "150",
            textAlign: "Left",
          };
        }
        case "long": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "number",
            editType: "numerictextbox",
            autoFit: true,
            width: "150",
            textAlign: "Left",
          };
        }
        case "percent": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "number",
            editType: "numerictextbox",
            autoFit: true,
            width: "150",
            textAlign: "Left",
            format: "P1",
          };
        }
        case "phone": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "string",
            editType: "textbox",
            autoFit: true,
            width: "150",
            textAlign: "Left",
          };
        }
        case "picklist": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "string",
            editType: "dropdownlist",
            autoFit: true,
            width: "150",
            textAlign: "Left",
          };
        }
        case "reference": {
          let relation = null;
          let columnName = templateField.name;

          // standard object relation
          if (templateField.name.slice(-2) === "Id") {
            relation = columnName.slice(0, -2);
          }

          // custom object relation
          if (templateField.name.slice(-3) === "__c") {
            relation = columnName.slice(0, -3);
          }

          return {
            field:
              `${relation.Name}` !== undefined
                ? `${relation}.Name`
                : templateField.Name,
            headerText: fieldLabel,
            type: "string",
            editType: "textbox",
            autoFit: true,
            width: "150",
            textAlign: "Left",
          };
        }
        case "string": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "string",
            editType: "textbox",
            autoFit: true,
            width: "150",
            textAlign: "Left",
          };
        }
        case "textArea": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "string",
            editType: "textbox",
            autoFit: true,
            width: "150",
            textAlign: "Left",
          };
        }
        case "url": {
          return {
            field: templateField.name,
            headerText: fieldLabel,
            type: "string",
            editType: "textbox",
            autoFit: true,
            width: "150",
            textAlign: "Left",
          };
        }
        default: {
          // only create columns for the types above
          // skip the rest (such as compound fields and blobs)
          return {
            field: null,
            headerText: null,
            width: null,
            textAlign: null,
          };
        }
      }
    };

    // get object metadata
    const objectMetadataManager = async (sobject, userInfo, objectMetadata) => {
      const objMetadata = objectMetadata.metadata;

      const hasObjMetadata = objMetadata.find((o) => o.objName === sobject);

      if (hasObjMetadata === undefined) {
        const metadataUrl = `/salesforce/sobjectFieldsDescribe`;

        const payload = {
          sobject: sobject,
          profileName: userInfo.profileName,
          profileId: userInfo.profileId,
        };

        try {
          let metadataResponse = await fetch(metadataUrl, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });

          if (!metadataResponse.ok) {
            throw new Error(metadataResponse.error.message);
          }

          const result = await metadataResponse.json();

          if (result.status !== "ok") {
            throw new Error(metadataResponse.errorMessage);
          }

          return {
            status: "ok",
            errorMessage: null,
            records: result.records,
          };
        } catch (err) {
          return {
            status: "error",
            errorMessage: err.message,
            records: [],
          };
        }
      } else {
        return {
          status: "ok",
          errorMessage: null,
          records: objMetadata,
        };
      }
    };

    const createGridColumns = async (templateFields, objectMetadata) => {
      if (templateFields !== null && templateFields.length > 0) {
        const cols = [];
        // need to use for..of so await will work
        for (const templateField of templateFields) {
          const columnName = templateField.name;

          const metadata = objectMetadata.metadata;

          // get the object metadata
          const objMetadata = metadata.find(
            (o) => o.objName === selectedObject
          );

          if (!objMetadata) {
            // display error message
            showToast(
              `Application error`,
              `createGridColumns() - Error getting metadata for ${selectedObject}`,
              "Error!",
              0,
              true
            );
            console.log(
              `createGridColumns() - Error getting metadata for ${selectedObject}`
            );
            return;
          }

          // get the object fields metadata
          const objFields = objMetadata.metadata.fields;

          // get the metadata for this field
          const fieldMetadata = objFields.find(
            (f) => f.name === templateField.name
          );

          // get the field label
          const fieldLabel = fieldMetadata.label;

          const col = await gridField(templateField, fieldLabel);

          if (col.field !== null) {
            cols.push(col);
          }
        }

        // store the grid columns
        gridColumns.current = cols;
      }
    };

    if (objectMetadata && templateFields) {
      createGridColumns(templateFields, objectMetadata);
    }

    // cleanup function
    return () => {
      gridColumns = null;
    };
  }, [templateFields]);

  if (
    selectedObject &&
    selectedTemplate &&
    selectedQuery &&
    gridColumns &&
    gridData
  ) {
    console.log("Rendering grid with columns");
    console.log(`Selected object >> ${selectedObject}`);
    console.log(`Selected template >> ${selectedTemplate}`);
    console.log(`Selected query >> ${selectedQuery}`);
    return (
      <GridComponent
        allowAdding={true}
        allowDeleting={true}
        allowPaging={false}
        allowEditing={true}
        allowExcelExport={true}
        allowFiltering={true}
        allowGrouping={true}
        allowPdfExport={true}
        allowSorting={true}
        allowReordering={true}
        allowResizing={true}
        columns={gridColumns.current}
        dataSource={gridData}
        enableStickyHeader={true}
        filterSettings={filterSettings}
        pageSettings={pageSettings}
        showColumnMenu={true}
        sortSettings={sortSettings}
        ref={(GridComponent) => (gridObj = GridComponent)}
        dataBound={(e) => {
          const columns = gridObj.columns;

          // create array of column names
          const columnNameArr = [];
          gridColumns.current.forEach((c) => {
            columnNameArr.push(c.field);
          });

          // convert to string
          let gridColumnNames = columnNameArr.join(", ");

          gridObj.autoFitColumns();
        }}
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
            Page,
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
