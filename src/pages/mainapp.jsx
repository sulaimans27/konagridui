import React, { useEffect, useState } from "react";

// import AppRoutes from "../routes/routes";
import { Flex } from "@chakra-ui/react";
import {
  BrowserRouter,
  Link as RouteLink,
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from "../components/sidebar/sidebar";
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

export default function MainApp() {
  // login to salesforce
  const email = "jeffreykennedy@dts.com";
  const pw = "3944Pine!!KlvlaJ75DPUNrGggtMHOsBvrc";
  const url = "http://login.salesforce.com";

  const [userInfo, setUserInfo] = useState({});

  // runs once
  useEffect(() => {
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
          conn: isLoggedIn.conn,
          locale: isLoggedIn.locale,
          sessionId: isLoggedIn.sessionId,
        };

        console.log(userInfo);

        // store user state
        setUserInfo(userInfo);

        // ToDo = store userInfo in global state
      })
      .catch((error) => {
        console.log("Error logging into Salesforce");
      });
  }, []);
  return (
    // hidden allows component to scroll
    <Flex h='100vh' flexDir='row' overflow='hidden' maxW='2000px'>
      {/* Column 1 - Sidebar */}
      <Flex
        w='12%'
        flexDir='column'
        alignItems='center'
        bg='#020202'
        color='#fff'
      >
        <Sidebar />
      </Flex>

      {/* Column 2 - Main */}
      {/* overflow enables horizontal scrolling */}
      <Flex w='88%' p='1%' flexDir='column' overflow='auto' h='100vh'>
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
  );
}
