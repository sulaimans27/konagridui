import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "../pages/loginView";
import GridView from "../pages/gridView";
import TemplateManagerView from "../pages/templateManagerView";
import QueryManagerView from "../pages/queryManagerView";
import KanbanView from "../pages/kanbanView";
import GanttView from "../pages/ganttView";
import SchedulerView from "../pages/schedulerView";
import PivotView from "../pages/pivotView";

function appRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={GridView} />
        <Route path='Login' element={LoginView} />
        <Route path='Templates' element={TemplateManagerView} />
        <Route path='Queries' element={QueryManagerView} />
        <Route path='Kanban' element={KanbanView} />
        <Route path='Gantt' element={GanttView} />
        <Route path='Scheduler' element={SchedulerView} />
        <Route path='Pivot' element={PivotView} />
      </Routes>
    </BrowserRouter>
  );
}

export default appRoutes;
