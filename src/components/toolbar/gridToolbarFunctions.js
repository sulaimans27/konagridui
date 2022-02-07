import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ColumnDirective } from "@syncfusion/ej2-react-grids";

// state management
import { setSelectedObject } from "../../features/selectedObjectSlice";

import { setSelectedTemplate } from "../../features/selectedTemplateSlice";

import { setSelectedQuery } from "../../features/querySlice";

import { setGridData } from "../../features/gridDataSlice";

import {
  addMetadata,
  updateMetadata,
  deleteMetadata,
} from "../../features/objectMetadataSlice";

// get template fields
export async function getTemplateFields(selectedTemplate) {
  const url = "/postgres/knexSelect";

  // get all columns
  let columns = null;

  // get the template fields from the database
  let values = {
    templateid: selectedTemplate,
  };

  let payload = {
    table: "template_field",
    columns: columns,
    values: values,
    rowIds: [],
    idField: null,
  };

  try {
    let response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`getTemplateFields() - ${response.message}`);
    }

    let result = await response.json();

    if (result.status === "error") {
      throw new Error(result.errorMessage);
    }

    let templateFields = result.records;

    return {
      status: "ok",
      errorMessage: null,
      records: templateFields,
    };
  } catch (error) {
    return {
      status: "error",
      errorMessage: error.message,
      records: [],
    };
  }
}

// load query selector options
export async function loadQuerySelectorOptions(selectedObject, userInfo) {
  const url = "/postgres/knexSelect";

  // get all columns
  let columns = null;

  // get the PUBLIC queries from the database
  let values = {
    object: selectedObject,
    orgid: userInfo.organizationId,
    is_public: true,
    is_active: true,
  };

  let payload = {
    table: "query",
    columns: columns,
    values: values,
    rowIds: [],
    idField: null,
  };

  try {
    let response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`loadQuerySelectorOptions() - ${response.message}`);
    }

    let result = await response.json();

    if (result.status === "error") {
      throw new Error(result.errorMessage);
    }

    let publicQueries = result.records;

    // get the PRIVATE queries from the database
    let privateValues = {
      object: selectedObject,
      orgid: userInfo.organizationId,
      is_public: false,
      is_active: true,
    };

    let privatePayload = {
      table: "query",
      columns: columns,
      values: privateValues,
      rowIds: [],
      idField: null,
    };

    let privateResponse = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(privatePayload),
    });

    if (!privateResponse.ok) {
      throw new Error(
        `loadQuerySelectorOptions() - ${privateResponse.message}`
      );
    }

    let privateResult = await privateResponse.json();

    if (privateResult.status === "error") {
      throw new Error(result.errorMessage);
    }

    let privateQueries = privateResult.records;

    let queries = [...publicQueries, ...privateQueries];

    // set selectedQuery state

    return {
      status: "ok",
      errorMessage: null,
      records: queries,
    };
  } catch (error) {
    return {
      status: "error",
      errorMessage: error.message,
      records: [],
    };
  }
}

// load template selector options
export async function selectedObjectChanged(selectedObject, userInfo) {
  const url = "/postgres/knexSelect";

  // get all columns
  let columns = null;

  // get the PUBLIC templates from the database
  let values = {
    object: selectedObject,
    orgid: userInfo.organizationId,
    is_public: true,
    is_active: true,
    is_related: false,
  };

  let payload = {
    table: "template",
    columns: columns,
    values: values,
    rowIds: [],
    idField: null,
  };

  try {
    let response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`selectedObjectChanged() - ${response.message}`);
    }

    let result = await response.json();

    if (result.status === "error") {
      throw new Error(result.errorMessage);
    }

    let publicTemplates = result.records;

    // get the PRIVATE templates from the database
    // get the PUBLIC templates from the database
    let privateValues = {
      object: selectedObject,
      orgid: userInfo.organizationId,
      is_public: false,
      is_active: true,
      is_related: false,
    };

    let privatePayload = {
      table: "template",
      columns: columns,
      values: privateValues,
      rowIds: [],
      idField: null,
    };

    let privateResponse = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(privatePayload),
    });

    if (!privateResponse.ok) {
      throw new Error(`selectedObjectChanged() - ${privateResponse.message}`);
    }

    let privateResult = await privateResponse.json();

    if (privateResult.status === "error") {
      throw new Error(result.errorMessage);
    }

    let privateTemplates = privateResult.records;

    let templates = [...publicTemplates, ...privateTemplates];

    return {
      status: "ok",
      errorMessage: null,
      records: templates,
    };
  } catch (error) {
    return {
      status: "error",
      errorMessage: error.message,
      records: [],
    };
  }
}

export function GridField(field) {
  const sfdcDataType = field.datatype;
  switch (sfdcDataType) {
    case "boolean": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "comboBox": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "currency": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Right'
        />
      );
    }
    case "date": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "datetime": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "decimal": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Right'
        />
      );
    }
    case "double": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Right'
        />
      );
    }
    case "email": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "encryptedstring": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "id": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "int": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "long": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "percent": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "phone": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "picklist": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "reference": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "string": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "textArea": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "url": {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='150'
          textAlign='Left'
        />
      );
    }
    default: {
      return (
        <ColumnDirective
          field={field.Name}
          headerText={field.Name}
          width='100'
          textAlign='Right'
        />
      );
    }
  }
}

// configure the grid columns
export async function SelectedTemplateChanged(
  selectedObject,
  selectedTemplate,
  userInfo
) {
  // ToDo = get template fields and store in global state
  // ToDo - run query if selectedQuery !== ''
  console.log("Getting template fields");
  const result = await getTemplateFields(selectedTemplate);

  if (result.status === "error") {
    return {
      status: "error",
      errorMessage: result.errorMessage,
      records: [],
    };
  }

  console.log("Returning template fields");

  return {
    status: "ok",
    errorMessage: null,
    records: result.records,
  };
}

// execute query
export async function SelectedQueryChanged(selectedObject, selectedQuery) {
  const url = "/salesforce/querySearch";

  const payload = {
    objName: selectedObject,
    relatedObjName: null,
    relationName: null,
    parentObjName: null,
    parentRecordId: null,
    lookupField: null,
    searchString: null,
    socketId: null,
    gridId: null,
  };

  try {
    let response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`SelectedQueryChanged() - ${response.message}`);
    }

    let result = await response.json();

    if (result.status === "error") {
      throw new Error(result.errorMessage);
    }

    return {
      status: "ok",
      errorMessage: null,
      records: result.records,
    };
  } catch (error) {
    return {
      status: "error",
      errorMessage: error.message,
      records: [],
    };
  }
}

export async function objectMetadataManager(sobject, userInfo, objectMetadata) {
  // check if array has metadata for sobject
  const objMetadata = objectMetadata.metadata;

  const hasObjMetadata = objMetadata.find((o) => o.objName === sobject);

  if (hasObjMetadata === undefined) {
    const metadataUrl = `/salesforce/sobjectFieldsDescribe`;

    const payload = {
      sobject: sobject,
      profileName: userInfo.profileName,
      profileId: userInfo.profileId,
    };

    let metadataRecords = [];

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

      const objMetadata = result.records;

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
}
