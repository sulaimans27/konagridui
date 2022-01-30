import React, { useEffect, useState } from "react";

// state management
import { useDispatch } from "react-redux";
import { setSelectedObject } from "../../features/objectSlice";
import { setSelectedTemplate } from "../../features/templateSlice";
import { setSelectedQuery } from "../../features/querySlice";

import { store } from "../../store/store";

// load template & query selector options
export async function selectedObjectChanged({ selectedObject }) {
  // get userInfo from store
  let appState = store.getState();
  let userInfo = appState.userInfo;

  const url = "/api/knexSelect";

  // get all columns
  let columns = null;

  let is_public = true;
  let is_active = true;
  let is_related = false;

  // get the PUBLIC templates from the database
  let values = {
    object: selectedObject,
    orgid: userInfo.organizationId,
    is_public: is_public,
    is_active: is_active,
    is_related: is_related,
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
    values["is_public"] = false;

    let privateResponse = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!privateResponse.ok) {
      throw new Error(`selectedObjectChanged() - ${response.message}`);
    }

    let privateResult = await privateResponse.json();

    if (privateResult.status === "error") {
      throw new Error(result.errorMessage);
    }

    let privateTemplates = result.records;

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
export async function selectedTemplateChanged({ selectedTemplate }) {}

// execute query
export async function selectedQueryChanged({ selectedTemplate }) {}
