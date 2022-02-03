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
import { setSelectedAppTitle } from "../../features/selectedAppTitleSlice";

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

  // get active view title from global state
  const selectedAppTitle = useSelector(
    (state) => state.selectedAppTitle.selectedAppTitle
  );

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

        {/* grid */}
        <NavItem
          icon={Mi.MdGridOn}
          linkTitle='Grid'
          bannerTitle='KonaGrid'
          className={selectedApp === "grid" ? "active-icon" : null}
          onClick={() => {
            dispatch(setSelectedApp("grid"));
          }}
        />

        {/* templates */}
        <NavItem
          icon={Mi.MdRemoveRedEye}
          linkTitle='Templates'
          bannerTitle='KonaGrid - Template Manager'
          className={selectedApp === "templates" ? "active-icon" : null}
          onClick={() => {
            dispatch(setSelectedApp("templates"));
          }}
        />

        {/* search */}
        <NavItem
          icon={Mi.MdSearch}
          linkTitle='Queries'
          bannerTitle='KonaGrid - Query Manager'
          className={selectedApp === "templates" ? "active-icon" : null}
          onClick={() => {
            dispatch(setSelectedApp("queries"));
          }}
        />

        {/* gantt */}
        <NavItem
          icon={Bi.BiShapeSquare}
          linkTitle='Gantt'
          bannerTitle='KonaGrid - Gantt'
          className={selectedApp === "templates" ? "active-icon" : null}
          onClick={() => {
            dispatch(setSelectedApp("gantt"));
          }}
        />

        {/* kanban */}
        <NavItem
          icon={Vsc.VscChecklist}
          linkTitle='Kanban'
          bannerTitle='KonaGrid - Kanban'
          className={selectedApp === "kanban" ? "active-icon" : null}
          onClick={() => {
            dispatch(setSelectedApp("kanban"));
          }}
        />

        {/* scheduler */}
        <NavItem
          icon={Mi.MdAccessAlarms}
          linkTitle='Scheduler'
          bannerTitle='KonaGrid - Scheduler'
          className={selectedApp === "scheduler" ? "active-icon" : null}
          onClick={() => {
            dispatch(setSelectedApp("scheduler"));
          }}
        />

        {/* pivot */}
        <NavItem
          icon={Bi.BiLineChart}
          linkTitle='Pivot'
          bannerTitle='KonaGrid - Pivot'
          className={selectedApp === "pivot" ? "active-icon" : null}
          onClick={() => {
            dispatch(setSelectedApp("pivot"));
          }}
        />

        {/* spreadsheet */}
        <NavItem
          icon={Bi.BiSpreadsheet}
          linkTitle='Spreadsheet'
          bannerTitle='KonaGrid - Spreadsheet'
          className={selectedApp === "spreadsheet" ? "active-icon" : null}
          onClick={() => {
            dispatch(setSelectedApp("spreadsheet"));
          }}
        />

        {/* app manager */}
        <NavItem
          icon={Mi.MdApps}
          linkTitle='App Mgr'
          bannerTitle='KonaGrid - App Manager'
          className={selectedApp === "appmgr" ? "active-icon" : null}
          onClick={() => {
            dispatch(setSelectedApp("appmgr"));
          }}
        />

        {/* demo data */}
        <NavItem
          icon={Bi.BiData}
          linkTitle='Demo Data'
          bannerTitle='KonaGrid - Demo Data'
          className={selectedApp === "demodata" ? "active-icon" : null}
          onClick={() => {
            dispatch(setSelectedApp("demodata"));
          }}
        />
      </Flex>
    </Flex>
  );
}
