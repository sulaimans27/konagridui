import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// state management
import { setSelectedObject } from "../../features/objectSlice";

import { setSelectedTemplate } from "../../features/templateSlice";

import { setSelectedQuery } from "../../features/querySlice";

import { setGridData } from "../../features/gridDataSlice";

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

  let is_public = true;
  let is_active = true;
  let is_related = false;

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
