import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../features/userInfoSlice";

// import AppRoutes from "../routes/routes";
import { Flex, Text } from "@chakra-ui/react";
import {
  BrowserRouter,
  Link as RouteLink,
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import GridToolbar from "../components/toolbar/gridToolbar";
import Grid from "../components/grid/grid";

import LoginView from "./loginView";
import GridView from "./gridView";
import TemplateManagerView from "./templateManagerView";
import QueryManagerView from "./queryManagerView";
import KanbanView from "./kanbanView";
import GanttView from "./ganttView";
import SchedulerView from "./schedulerView";
import PivotView from "./pivotView";
import SpreadsheetView from "./spreadsheetView";
import AppManagerView from "./appManagerView";
import DemoDataView from "./demoDataView";
import { store } from "../store/store";
import { BiCalculator } from "react-icons/bi";

export default function MainApp() {
  const dispatch = useDispatch();

  const sidebarSize = useSelector((state) => state.sidebarSize.sidebarSize);

  // login to salesforce
  const email = "jeffreykennedy@dts.com";
  const pw = "3944Pine!!KlvlaJ75DPUNrGggtMHOsBvrc";
  const url = "http://login.salesforce.com";

  // runs once
  useEffect(() => {
    console.log("Logging into Salesforce");
    fetch(
      `/salesforce/jsforce?userName=${email}&userPassword=${pw}&loginUrl=${url}`
    )
      .then((response) => response.json())
      .then((isLoggedIn) => {
        if (isLoggedIn.statusCode === 500) {
          // ToDo - display error message
          console.log("Error logging into Salesforce");
          return;
        }
        // ToDo - display success toast message
        console.log("Salesforce login successful");

        const userInfo = {
          userId: isLoggedIn.userId,
          userName: email,
          userPassword: pw,
          loginUrl: url,
          userEmail: isLoggedIn.userEmail,
          organizationId: isLoggedIn.organizationId,
          profileId: isLoggedIn.profileId,
          profileName: isLoggedIn.profileName,
          locale: isLoggedIn.locale,
          sessionId: isLoggedIn.sessionId,
        };

        console.log(userInfo);

        // store user state
        console.log("Setting userInfo state");
        dispatch(setUserInfo(userInfo));
      })
      .catch((error) => {
        console.log("Error logging into Salesforce");
      });
  });

  return (
    // hidden allows component to scroll
    <Flex flexDirection='column' alignItems='flex-start' h='100vh' w='100vw'>
      <Flex
        h='4%'
        w='100%'
        backgroundColor='blue.600'
        color='white'
        justifyContent='flex-start'
        alignItems='center'
      >
        <Text ml={10}>KonaGrid</Text>
      </Flex>
      <Flex flexDirection='row' w='100%' h='96%'>
        {/* Column 1 - Sidebar */}
        <Flex
          alignItems='flex-start'
          ml={5}
          mr={5}
          borderRight='3px solid #2B6CB0'
        >
          <Sidebar />
        </Flex>

        {/* Column 2 - Main */}
        {/* overflow enables horizontal scrolling */}
        <Flex p='1%' flexDir='column' overflow='auto' w='100%' h='97%'>
          <Routes>
            <Route path='/grid' exact element={<GridView />} />
            <Route path='/login' element={<LoginView />} />
            <Route path='/templates' element={<TemplateManagerView />} />
            <Route path='/queries' element={<QueryManagerView />} />
            <Route path='/kanban' element={<KanbanView />} />
            <Route path='/gantt' element={<GanttView />} />
            <Route path='/scheduler' element={<SchedulerView />} />
            <Route path='/pivot' element={<PivotView />} />
            <Route path='/spreadsheet' element={<SpreadsheetView />} />
            <Route path='/appmgr' element={<AppManagerView />} />
            <Route path='/demodata' element={<DemoDataView />} />
          </Routes>
        </Flex>
      </Flex>
    </Flex>
  );
}
