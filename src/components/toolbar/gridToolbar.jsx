import React, { useEffect, useState } from "react";

import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

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
  // state
  const [objects, setObjects] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [queries, setQueries] = useState([]);

  // run once to get the objects
  console.log("Ready to run Toolbar useEffect");
  useEffect(() => {
    console.log("Getting org objects");
    // get users profile name from the store
    let userInfo = {};
    userInfo["profileName"] = "System Administrator";

    const payload = {
      profileName: userInfo.profileName,
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

        let orgObjects = result.records;

        console.log(orgObjects);

        // create object selector options
        // [{ value: 123, text: 'Account'}, ...]
        const options = [];
        orgObjects.forEach((o) => {
          const newOption = {
            value: o.id,
            label: o.value,
          };
          options.push(newOption);
        });

        console.log(options);

        // update the objects state
        console.log("Setting objects state");
        setObjects(options);
      })
      .catch((err) => {
        // ToDo = display error message
        return;
      });
  }, []);

  const templateData = [
    {
      label: "Sales",
      value: "1",
    },
    {
      label: "Support",
      value: "2",
    },
    {
      label: "Finance",
      value: "3",
    },
  ];

  const queryData = [
    {
      label: "All Accnts",
      value: "1",
    },
    {
      label: "Accnts by Industry",
      value: "2",
    },
    {
      label: "Enterprise Accnts",
      value: "3",
    },
  ];

  const groupedOptions = [
    {
      label: "Objects",
      options: objects,
    },
  ];

  return (
    <Flex flexDir='column' alignItems='left' bg='#fff' color='#020202'>
      {/* row 0 */}
      <Flex flexDir='row' alignItems='left' mt={5}>
        <Flex mt={1}>
          <Link as={MdApps} fontSize='2xl'></Link>
        </Flex>

        <Box w={275} ml='30'>
          <Select
            name='objectSelector'
            className='chakra-react-select'
            tagVarient='subtle'
            placeholder='Select object'
            size='sm'
            options={objects}
          />
        </Box>

        {/* template selector */}
        <Flex flexDir='column'>
          {/* template selector */}
          <Box w={275} ml={132}>
            <Select
              name='templateSelector'
              className='chakra-react-select'
              tagVarient='subtle'
              placeholder='Select template'
              size='sm'
              options={templateData}
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

        {/* Query selector */}
        <Box w={275} ml={20} mt={-1}>
          <Select
            name='querySelector'
            tagVarient='subtle'
            placeholder='Select query'
            size='sm'
            options={queryData}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default GridToolbar;
