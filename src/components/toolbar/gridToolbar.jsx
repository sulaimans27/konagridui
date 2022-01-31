import React, { useEffect, useState, useRef } from "react";
import * as ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";

// Syncfusion components
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ToastUtility } from "@syncfusion/ej2-react-notifications";

// state management
import { setObjectList } from "../../features/objectListSlice";

import { setTemplateList } from "../../features/templateListSlice";

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

import {
  Flex,
  Link,
  Box,
  HStack,
  VStack,
  List,
  Container,
} from "@chakra-ui/react";

import { MdPersonAdd } from "react-icons/md";
import { MdViewColumn } from "react-icons/md";
import { MdFormatAlignJustify } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdGridOn } from "react-icons/md";
import { MdPalette } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { MdApps } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdEqualizer } from "react-icons/md";
import { MdReplay } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { MdContentCut } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { MdAccessAlarms } from "react-icons/md";
import { MdPieChartOutlined } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { BiData } from "react-icons/bi";
import { BiTask } from "react-icons/bi";
import { BiLineChart } from "react-icons/bi";
import { BiSpreadsheet } from "react-icons";
import { BiShapeSquare } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";
import { BiChevronsLeft } from "react-icons/bi";
import { BiCut } from "react-icons/bi";
import { DiFirebase } from "react-icons/di";
import { BiFilterAlt } from "react-icons/bi";
import { VscChecklist } from "react-icons/vsc";

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
    (state) => state.selectedObject.setSelectedObject
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

  // run once to get the objects
  console.log("Ready to run Toolbar useEffect");

  // objects
  useEffect(() => {
    if (!hasOrgObjects.current && userInfo) {
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

          // update the global state && set the object selector to the first value
          if (result.records.length > 0) {
            console.log("Setting objects state");
            dispatch(setObjectList(result.records));
            dispatch(setSelectedObject(result.records[0]));
            objectSelector.value = result.records[0];
          }
        })
        .catch((err) => {
          // ToDo = display error message
          return;
        });
    }
  }, [dispatch, userInfo]);

  return (
    <Flex flexDir='column' alignItems='left' bg='#fff' color='#020202'>
      {/* row 0 */}
      <Flex flexDir='row' alignItems='left' mt={5}>
        <Flex mt={1}>
          <Link as={MdApps} fontSize='2xl'></Link>
        </Flex>

        <Box w={275} ml='30'>
          <DropDownListComponent
            name='objectSelector'
            ref={objectSelector}
            fields={objectFieldsMap}
            placeholder='Select object'
            dataSource={objectOptions}
            onChange={(e) => {
              let selectedObject = e.value;

              // load template selector options
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
                  dispatch(setSelectedObject(selectedObject));

                  // store template option state
                  console.log("Displaying template options");
                  console.log(result.records);

                  dispatch(setTemplateList(result.records));

                  // set the template selector to the first value
                  if (result.records.length > 0) {
                    // templateSelector.current.state.value = options[0];
                  }
                }
              );

              // load query selector options
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

                  // prepare query options list
                  const queryOptions = [];
                  // result.records.forEach((t) => {
                  //   const newOption = {
                  //     value: t.id,
                  //     label: t.name,
                  //   };
                  //   options.push(newOption);
                  // });

                  // store query option state
                  console.log("Displaying query options");
                  console.log(result.records);
                  dispatch(setQueryList(result.records));

                  // set the query selector to the first value
                  if (queryOptions.length > 0) {
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
          <Box w={275} ml={182}>
            <DropDownListComponent
              name='templateSelector'
              ref={templateSelector}
              fields={templateFieldsMap}
              placeholder='Select template'
              dataSource={templateOptions}
              onChange={(e) => {
                let selectedTemplate = e.value;

                // configure the grid columns
                tb.selectedTemplateChanged(selectedTemplate, userInfo).then(
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

                    // store selectedTemplate in global state
                    dispatch(setSelectedTemplate(selectedTemplate));
                  }
                );
              }}
            />
          </Box>
        </Flex>
      </Flex>
      {/* row 1 */}
      <Flex flexDir='row' alignItems='left' mt={5}>
        {/* Menu icon */}
        <Flex className='sidebar-items'>
          <Link as={MdFormatAlignJustify} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Search icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={MdSearch} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Filter icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={BiFilterAlt} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Save icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={MdCheck} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Add icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={MdAdd} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Delete icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={MdClear} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Preferences icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={MdFavoriteBorder} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Relationships icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link as={BiChevronsRight} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Shopping Cart icon */}
        <Flex className='sidebar-items' ml={5}>
          <Link
            as={MdShoppingCart}
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
              let selectedQuery = e.value;

              // store selectedQuery in global state
              dispatch(setSelectedQuery(selectedQuery));

              // execute the query
              tb.selectedQueryChanged(selectedQuery);
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default GridToolbar;
