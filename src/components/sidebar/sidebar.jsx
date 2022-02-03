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

import { setSelectedApp } from "../../features/selectedAppSlice";

// bi icons
import * as Bi from "react-icons/bi";

// di icons
import * as Di from "react-icons/di";

// feather icons
import * as Fi from "react-icons/fi";

// IO icons
import * as Io from "react-icons/io";

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

  // get active view from global state
  const selectedApp = useSelector((state) => state.selectedApp.selectedApp);

  return (
    <Flex
      flexDir='column'
      borderRadius={2}
      w={sidebarSize === "small" ? "60px" : "200px"}
      justifyContent='space-between'
      padding={4}
      mt={5}
    >
      {/* nav items */}
      <Flex
        as='nav'
        flexDir='column'
        alignItems={sidebarSize === "small" ? "center" : "flex-start"}
        paddingRight={4}
      >
        <Text id='appTitle' color='blue.600' mt={5}>
          Apps
        </Text>

        <NavItem
          icon={Mi.MdGridOn}
          title='Grid'
          className={selectedApp === "grid" ? "active-icon" : null}
          onClick={() => dispatch(setSelectedApp("grid"))}
        />

        <NavItem
          icon={Mi.MdRemoveRedEye}
          title='Templates'
          className={selectedApp === "templates" ? "active-icon" : null}
          onClick={() => dispatch(setSelectedApp("templates"))}
        />

        <NavItem icon={Mi.MdSearch} title='Queries' />

        <NavItem icon={Bi.BiShapeSquare} title='Gantt' />

        <NavItem icon={Vsc.VscChecklist} title='Kanban' />

        <NavItem icon={Mi.MdAccessAlarms} title='Scheduler' />

        <NavItem icon={Bi.BiLineChart} title='Pivot' />

        <NavItem icon={Bi.BiSpreadsheet} title='Spreadsheet' />

        <NavItem icon={Mi.MdApps} title='App Mgr' />

        <NavItem icon={Bi.BiData} title='Demo Data' />
      </Flex>
    </Flex>
  );
}
