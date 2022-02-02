import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";

import { setSidebarSize } from "../../features/sidebarSizeSlice";

// bi icons
import * as Bi from "react-icons/bi";

// di icons
import * as Di from "react-icons/di";

// feather icons
import * as Fi from "react-icons/fi";

// material icons
import * as Mi from "react-icons/md";

// vsc icons
import * as Vsc from "react-icons/vsc";

import logo from "../../assets/images/react-logo.jpeg";

import NavItem from "../navItem/NavItem";

import { Image } from "@chakra-ui/react";

export default function Sidebar() {
  const dispatch = useDispatch();

  // get size from global this.state
  const sidebarSize = useSelector((state) => state.sidebarSize.sidebarSize);

  return (
    <Flex
      flexDir='column'
      lest='5'
      h='95vh'
      mt='2.5vh'
      boxShadow='0, 4px 12px 0 rgba(0, 0, 0, 0.05)'
      borderRadius={sidebarSize === "small" ? "15px" : "30px"}
      w={sidebarSize === "small" ? "50px" : "200px"}
      justifyContent='space-between'
    >
      {/* hamburger menu + nav items */}
      <Flex
        as='nav'
        p='5%'
        flexDir='column'
        alignItems={sidebarSize === "small" ? "center" : "flex-start"}
      >
        <Text color='grey' mt={5}>
          Apps
        </Text>
        <NavItem icon={Mi.MdGridOn} title='Grid' />
        <NavItem icon={Mi.MdRemoveRedEye} title='Templates' />
        <NavItem icon={Mi.MdSearch} title='Queries' />
        <NavItem icon={Bi.BiShapeSquare} title='Gantt' />
        <NavItem icon={Vsc.VscChecklist} title='Kanban' />
        <NavItem icon={Mi.MdAccessAlarms} title='Scheduler' />
        <NavItem icon={Bi.BiLineChart} title='Pivot' />
        <NavItem icon={Bi.BiSpreadsheet} title='Spreadsheet' />
        <NavItem icon={Mi.MdApps} title='App Mgr' />
        <NavItem icon={Bi.BiData} title='Demo Data' />
      </Flex>

      {/* avatar + employee name */}
      <Flex pt='5%' flexDir='column' w='100%' alignItems='flex-start' mb={4}>
        <Divider display={sidebarSize === "small" ? "none" : "flex"} />
        <Flex mt={4} alignItems='center'>
          <Avatar size='sm' src='/images/avatar-1.jpg' />
          <Flex
            flexDir='column'
            ml={4}
            display={sidebarSize === "small" ? "none" : "flex"}
          >
            <Heading as='h3' size='sm'>
              Jeffrey Kennedy
            </Heading>
            <Text color='grey'>Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
