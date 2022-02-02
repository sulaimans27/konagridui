import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { QueryBuilderComponent } from "@syncfusion/ej2-react-querybuilder";

function queryView() {
  let columnData = [
    { field: "EmployeeID", label: "EmployeeID", type: "number" },
    { field: "FirstName", label: "FirstName", type: "string" },
    {
      field: "TitleOfCourtesy",
      label: "Title Of Courtesy",
      type: "boolean",
      values: ["Mr.", "Mrs."],
    },
    { field: "Title", label: "Title", type: "string" },
    {
      field: "HireDate",
      label: "HireDate",
      type: "date",
      format: "dd/MM/yyyy",
    },
    { field: "Country", label: "Country", type: "string" },
    { field: "City", label: "City", type: "string" },
  ];

  console.log("Rendering QueryBuilder");

  return <QueryBuilderComponent width='100%' columns={columnData} />;
}

export default queryView;
