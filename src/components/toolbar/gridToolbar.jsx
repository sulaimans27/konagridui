import React, { useEffect, useState, useRef } from "react";
import * as ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";

// Syncfusion components
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ToastUtility } from "@syncfusion/ej2-react-notifications";
import { setQueryBuilderVisible } from "../../features/queryBuilderVisabilitySlice";
import { setSidebarSize } from "../../features/sidebarSizeSlice";

import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";

import { setGridData } from "../../features/gridDataSlice";

// state management
import { setObjectList } from "../../features/objectListSlice";

import { setTemplateList } from "../../features/templateListSlice";

import { setTemplateFieldList } from "../../features/templateFieldListSlice";

import { setQueryList } from "../../features/queryListSlice";

import { setSelectedObject } from "../../features/objectSlice";

import { setSelectedTemplate } from "../../features/templateSlice";

import { setSelectedQuery } from "../../features/querySlice";

import * as tb from "./gridToolbarFunctions";

import {
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
} from "chakra-react-select";

import { Flex, Link, Box } from "@chakra-ui/react";

// bi icons
import * as Bi from "react-icons/bi";

// di icons
import * as Di from "react-icons/di";

// feather icons
import * as Fi from "react-icons/fi";

// IO icons
// import * as Io from "react-icons/io5";
import { IoMdApps } from "react-icons/io";

// material icons
import * as Mi from "react-icons/md";

// vsc icons
import * as Vsc from "react-icons/vsc";

function GridToolbar() {
  const objectSelector = useRef(null);
  const templateSelector = useRef(null);
  const querySelector = useRef(null);
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

  // global state
  const dispatch = useDispatch();

  let userInfo = useSelector((state) => state.userInfo.userInfo);

  const selectedObject = useSelector(
    (state) => state.selectedObject.selectedObject
  );
  const selectedTemplate = useSelector(
    (state) => state.selectedTemplate.selectedTemplate
  );
  const selectedQuery = useSelector(
    (state) => state.selectedQuery.selectedQuery
  );

  let objectOptions = useSelector((state) => state.objectList.objectList);

  let templateOptions = useSelector((state) => state.templateList.templateList);

  let queryOptions = useSelector((state) => state.queryList.queryList);

  let hasUserInfo = useRef(false);
  let hasOrgObjects = useRef(false);

  // object fields mapping
  let objectFieldsMap = { text: "value", value: "id" };

  // template fields mapping
  let templateFieldsMap = { text: "template_name", value: "id" };

  // query fields mapping
  let queryFieldsMap = { text: "name", value: "id" };

  // objects
  useEffect(() => {
    if (!selectedObject && userInfo) {
      console.log("Getting org objects");

      const payload = {
        userInfo: userInfo,
      };

      // get the org objects for the user's profile
      const url = "/salesforce/sobjects";

      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.status !== "ok") {
            throw new Error("GridToolbar() - Error retriving org objects");
          }

          console.log("Org objects >>");
          console.log(result.records);

          hasUserInfo.current = true;

          console.log("Setting selected object state");
          dispatch(setSelectedObject(result.records[0]));

          // update the global state && set the object selector to the first value
          if (result.records.length > 0) {
            console.log("Setting object options state");
            dispatch(setObjectList(result.records));
          }
        })
        .catch((err) => {
          showToast(
            "Error retrieving org objects",
            err.message,
            "Error!",
            0,
            true
          );
          console.log(err.message);
          return;
        });
    }
  }, [dispatch, showToast, userInfo, selectedObject]);

  // queryBuilderView visibility state
  let queryBuilderVisible = useSelector(
    (state) => state.queryBuilderVisible.queryBuilderVisible
  );

  // Sidebar size state
  let sidebarSize = useSelector((state) => state.sidebarSize.sidebarSize);

  return (
    <Flex flexDir='column' alignItems='left' bg='#fff' color='#020202'>
      {/* row 0 */}
      <Flex flexDir='row' alignItems='left' mt={5}>
        {/* apps selector */}
        <Flex mt={1}>
          <Link as={IoMdApps} fontSize='25px'></Link>
        </Flex>

        <Box w={275} ml='30'>
          <DropDownListComponent
            name='objectSelector'
            ref={objectSelector}
            fields={objectFieldsMap}
            placeholder='Select object'
            dataSource={objectOptions}
            onChange={(e) => {
              console.log("Selected object changed");
              let selectedObject = e.value;

              // load template selector options
              console.log("Loading template selector options");
              tb.selectedObjectChanged(selectedObject, userInfo).then(
                (result) => {
                  if (result.status !== "ok") {
                    // alert user to error
                    showToast(
                      "Error retrieving org objects",
                      result.errorMessage,
                      "Error!",
                      0,
                      true
                    );
                    console.log(result.errorMessage);
                    return;
                  }
                  // set selectedObject state
                  console.log("Storing selected object state");
                  dispatch(setSelectedObject(selectedObject));

                  console.log("Displaying template options");
                  console.log(result.records);

                  // storing template options state
                  console.log("Storing template options state");
                  dispatch(setTemplateList(result.records));

                  // set the template selector to the first value
                  if (result.records.length > 0) {
                  }
                }
              );

              // load query selector options
              console.log("Loading query options");
              tb.loadQuerySelectorOptions(selectedObject, userInfo).then(
                (result) => {
                  if (result.status !== "ok") {
                    showToast(
                      "Error retrieving query templates",
                      result.errorMessage,
                      "Error!",
                      0,
                      true
                    );
                    console.log(result.errorMessage);
                    return;
                  }

                  // store query option state
                  console.log("Displaying query options");
                  console.log(result.records);

                  console.log("Storing query options state");
                  dispatch(setQueryList(result.records));

                  // set the query selector to the first value
                  if (result.records.length > 0) {
                    // templateSelector.current.state.value = options[0];
                  }
                }
              );
            }}
          />
        </Box>

        {/* template selector */}
        <Flex flexDir='column'>
          {/* template selector */}
          <Box w={275} ml={146}>
            <DropDownListComponent
              name='templateSelector'
              ref={templateSelector}
              fields={templateFieldsMap}
              placeholder='Select template'
              dataSource={templateOptions}
              onChange={(e) => {
                console.log("Selected template changed");
                let selectedTemplate = e.value;

                // configure the grid columns
                tb.SelectedTemplateChanged(
                  selectedObject,
                  selectedTemplate,
                  userInfo
                ).then((result) => {
                  if (result.status !== "ok") {
                    showToast(
                      "Error retrieving template fields",
                      result.errorMessage,
                      "Error!",
                      0,
                      true
                    );
                    console.log(result.errorMessage);
                    return;
                  }

                  const templateFields = result.records;

                  // store selectedTemplate in global state
                  console.log("Storing selected template state");
                  dispatch(setSelectedTemplate(selectedTemplate));

                  console.log("Displaying template fields");
                  console.log(result.records);

                  // store template fields in global state
                  console.log("Storing template options state");
                  dispatch(setTemplateFieldList(templateFields));
                });
              }}
            />
          </Box>
        </Flex>
      </Flex>
      {/* row 1 */}
      <Flex flexDir='row' alignItems='left' mt={5}>
        {/* Menu icon */}
        <Flex className='sidebar-items'>
          <Link
            as={Fi.FiMenu}
            fontSize='1xl'
            onClick={() => {
              // toggle query builder visibility
              if (sidebarSize === "small") {
                dispatch(setSidebarSize("large"));
              } else {
                dispatch(setSidebarSize("small"));
              }
              // console.log(
              //   `Search button clicked - visiblility is ${!queryBuilderVisible}`
              // );
            }}
          ></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Search icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link
            as={Mi.MdSearch}
            fontSize='1xl'
            onClick={() => {
              // toggle query builder visibility
              if (sidebarSize === "small") {
                dispatch(setSidebarSize("large"));
              } else {
                dispatch(setSidebarSize("small"));
              }
            }}
          ></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Filter icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={Bi.BiFilterAlt} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Save icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={Mi.MdCheck} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Add icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={Mi.MdAdd} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Delete icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={Mi.MdClear} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Preferences icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={Mi.MdFavoriteBorder} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Relationships icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={Bi.BiChevronsRight} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Shopping Cart icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link
            as={Mi.MdShoppingCart}
            fontSize='1xl'
            onClick={() => {
              // test toast
              showToast(
                "Toast Tile",
                "Toast message ...",
                "Information!",
                4000,
                false
              );
            }}
          ></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Query selector */}
        <Box w={275} ml={20} mt={-1}>
          <DropDownListComponent
            name='querySelector'
            ref={querySelector}
            fields={queryFieldsMap}
            placeholder='Select query'
            dataSource={queryOptions}
            onChange={(e) => {
              console.log("Selected query changed");
              let selectedQuery = e.value;

              // store selectedQuery in global state
              console.log("Storing selectedQuery state");
              dispatch(setSelectedQuery(selectedQuery));

              // execute the query
              console.log("Executing selectedQueryChanged");
              tb.SelectedQueryChanged(selectedObject, selectedQuery).then(
                (result) => {
                  if (result.status !== "ok") {
                    showToast(
                      "Error retrieving query templates",
                      result.errorMessage,
                      "Error!",
                      0,
                      true
                    );
                    console.log(result.errorMessage);
                    return;
                  }

                  const queryResult = result.records[0];

                  console.log("Displaying query results");
                  console.log(queryResult);

                  // store query results in global state
                  console.log("Storing query results state");
                  dispatch(setGridData(queryResult));
                }
              );
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default GridToolbar;
