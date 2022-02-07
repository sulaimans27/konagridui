import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as tbFunc from "./gridToolbarFunctions";

// Syncfusion components
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ToastUtility } from "@syncfusion/ej2-react-notifications";
import { setQueryBuilderVisible } from "../../features/queryBuilderVisabilitySlice";
import { setSidebarSize } from "../../features/sidebarSizeSlice";

import { setGridData } from "../../features/gridDataSlice";

// state management
import { setObjectList } from "../../features/objectListSlice";

import { setTemplateList } from "../../features/templateListSlice";

import { setTemplateFields } from "../../features/templateFieldsSlice";

import { setQueryList } from "../../features/queryListSlice";

import { setSelectedObject } from "../../features/selectedObjectSlice";

import { setSelectedTemplate } from "../../features/selectedTemplateSlice";

import { setSelectedQuery } from "../../features/querySlice";

import { setGridColumns } from "../../features/gridColumnsSlice";

import { Flex, Link, Box } from "@chakra-ui/react";

// bi icons
import * as Bi from "react-icons/bi";

// di icons
// import * as Di from "react-icons/di";

// feather icons
import * as Fi from "react-icons/fi";

// IO icons
import { IoMdApps } from "react-icons/io";

// material icons
import * as Mi from "react-icons/md";

// vsc icons
// import * as Vsc from "react-icons/vsc";

import { addMetadata } from "../../features/objectMetadataSlice";

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

  // get userInfo from global state
  let userInfo = useSelector((state) => state.userInfo.userInfo);

  // get selectedObject from global state
  const selectedObject = useSelector(
    (state) => state.selectedObject.selectedObject
  );

  // get selectedTemplate from global state
  const selectedTemplate = useSelector(
    (state) => state.selectedTemplate.selectedTemplate
  );

  // get selectedQuery from global state
  const selectedQuery = useSelector(
    (state) => state.selectedQuery.selectedQuery
  );

  // get metadata from global state
  const objectMetadata = useSelector((state) => state.objectMetadata);

  let objectOptions = useSelector((state) => state.objectList.objectList);

  let templateOptions = useSelector((state) => state.templateList.templateList);

  let queryOptions = useSelector((state) => state.queryList.queryList);

  // const metadataFields = metadataMap.get(selectedObject);

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
            "GridToolbar() - Error retrieving org objects",
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
              tbFunc
                .selectedObjectChanged(selectedObject, userInfo, objectMetadata)
                .then((result) => {
                  if (result.status !== "ok") {
                    // alert user to error
                    showToast(
                      `GridToolbar() - Error retrieving templates for ${selectedObject}`,
                      result.errorMessage,
                      "Error!",
                      0,
                      true
                    );
                    console.log(result.errorMessage);
                    return;
                  }
                  // set selectedObject state
                  console.log("GridToolbar() - Storing selected object state");
                  dispatch(setSelectedObject(selectedObject));

                  console.log("GridToolbar() - Displaying template options");
                  console.log(result.records);

                  // storing template options state
                  console.log("GridToolbar() - Storing template options state");
                  dispatch(setTemplateList(result.records));

                  // store object metadata if needed
                  tbFunc
                    .objectMetadataManager(
                      selectedObject,
                      userInfo,
                      objectMetadata
                    )
                    .then((result) => {
                      if (result.status !== "ok") {
                        // display error message
                        showToast(
                          `GridToolbar() - Error setting metadata for ${selectedObject}`,
                          result.errorMessage,
                          "Error!",
                          0,
                          true
                        );
                        console.log(result.errorMessage);
                        return;
                      }

                      // store object metadata in global state
                      const objMetadata = result.records;
                      dispatch(
                        addMetadata({
                          objName: selectedObject,
                          metadata: objMetadata,
                        })
                      );
                    });

                  // set the template selector to the first value
                  if (result.records.length > 0) {
                  }
                });

              // load query selector options
              console.log("GridToolbar() - Loading query options");
              tbFunc
                .loadQuerySelectorOptions(selectedObject, userInfo)
                .then((result) => {
                  if (result.status !== "ok") {
                    showToast(
                      "GridToolbar() - Error retrieving query templates",
                      result.errorMessage,
                      "Error!",
                      0,
                      true
                    );
                    console.log(result.errorMessage);
                    return;
                  }

                  // store query option state
                  console.log("GridToolbar() - Displaying query options");
                  console.log(result.records);

                  console.log("GridToolbar() - Storing query options state");
                  dispatch(setQueryList(result.records));

                  // set the query selector to the first value
                  if (result.records.length > 0) {
                    // templateSelector.current.state.value = options[0];
                  }
                });
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
                console.log("GridToolbar() - Selected template changed");
                let selectedTemplate = e.value;

                // configure the grid columns
                tbFunc
                  .SelectedTemplateChanged(
                    selectedObject,
                    selectedTemplate,
                    userInfo
                  )
                  .then((result) => {
                    if (result.status !== "ok") {
                      showToast(
                        "GridToolbar() - Error retrieving template fields",
                        result.errorMessage,
                        "Error!",
                        0,
                        true
                      );
                      console.log(result.errorMessage);
                      return;
                    }

                    const templateFields = result.records;

                    // store template fields in global state
                    console.log(
                      "GridToolbar() - Storing template fields state"
                    );
                    dispatch(setTemplateFields(templateFields));

                    // store selectedTemplate in global state
                    console.log(
                      "GridToolbar() - Storing selected template state"
                    );
                    dispatch(setSelectedTemplate(selectedTemplate));
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
            fontSize='2xl'
            onClick={() => {
              // toggle query builder visibility
              if (queryBuilderVisible === false) {
                dispatch(setQueryBuilderVisible(true));
              } else {
                dispatch(setQueryBuilderVisible(false));
              }
            }}
          ></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Filter icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={Bi.BiFilterAlt} fontSize='2xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Save icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={Mi.MdCheck} fontSize='2xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Add icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={Mi.MdAdd} fontSize='2xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Delete icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={Mi.MdClear} fontSize='2xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Preferences icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={Mi.MdFavoriteBorder} fontSize='2xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Relationships icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={Bi.BiChevronsRight} fontSize='2xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Shopping Cart icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link
            as={Mi.MdShoppingCart}
            fontSize='2xl'
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
        <Box w={275} ml={108} mt={-1}>
          <DropDownListComponent
            name='querySelector'
            ref={querySelector}
            fields={queryFieldsMap}
            placeholder='Select query'
            dataSource={queryOptions}
            onChange={(e) => {
              console.log("GridToolbar() - Selected query changed");
              let selectedQuery = e.value;

              // store selectedQuery in global state
              console.log("GridToolbar() - Storing selectedQuery state");
              dispatch(setSelectedQuery(selectedQuery));

              // execute the query
              console.log("GridToolbar() - Executing selectedQueryChanged");
              tbFunc
                .SelectedQueryChanged(selectedObject, selectedQuery)
                .then((result) => {
                  if (result.status !== "ok") {
                    showToast(
                      "GridToolbar() - Error retrieving query templates",
                      result.errorMessage,
                      "Error!",
                      0,
                      true
                    );
                    console.log(result.errorMessage);
                    return;
                  }

                  // convert date strings to objects
                  result.records.forEach((r) => {});

                  const queryResult = result.records[0];

                  console.log("GridToolbar() - Displaying query results");
                  console.log(queryResult);

                  // store query results in global state
                  console.log("GridToolbar() - Storing query results state");
                  dispatch(setGridData(queryResult));
                });
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default GridToolbar;
