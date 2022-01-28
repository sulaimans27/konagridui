import React, { useState } from "react";

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
  Select,
  Stack,
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

function gridToolbar() {
  return (
    <Flex flexDir='column' alignItems='left' bg='#fff' color='#020202'>
      {/* selectors row */}
      <Flex flexDir='row' alignItems='left' bg='#fff' color='#020202'>
        {/* Apps icon */}
        <Flex className='sidebar-items' mt={2}>
          <Link as={MdApps} fontSize='1xl'></Link>
          <Link _hover={{ textDecor: "none" }}></Link>
        </Flex>

        {/* Object selector */}
        <Select
          width='225'
          size='sm'
          fontSize='sm'
          ml={8}
          placeholder='Select object'
        >
          <option value='option1'>Accounts</option>
          <option value='option2'>Contacts</option>
          <option value='option3'>Leads</option>
        </Select>

        {/* Template selector */}
        <Select
          width='225'
          size='sm'
          fontSize='sm'
          ml={8}
          placeholder='Select template'
        >
          <option value='option1'>Sales</option>
          <option value='option2'>Support</option>
          <option value='option3'>Finance</option>
          <option value='option4'>Marketing</option>
        </Select>

        {/* Query selector */}
        <Select
          width='225'
          size='sm'
          fontSize='sm'
          ml={8}
          placeholder='Select query'
        >
          <option value='option1'>Accounts</option>
          <option value='option2'>Accnts by Industry</option>
          <option value='option3'>Enterprise Accnts</option>
        </Select>
      </Flex>

      {/* // buttons row */}
      <Flex flexDir='row' alignItems='left' bg='#fff' color='#020202'>
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
      </Flex>
    </Flex>
  );
}

export default gridToolbar;
