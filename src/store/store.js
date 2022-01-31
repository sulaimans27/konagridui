import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../features/appSlice";
import columnsReducer from "../features/columnsSlice";
import filterSettingsReducer from "../features/filterSettingsSlice";
import groupSettingsReducer from "../features/groupSettingsSlice";

import metadataMapReducer from "../features/metadataMapSlice";
import objectListReducer from "../features/objectListSlice";
import queryListReducer from "../features/queryListSlice";
import relatedColumnsReducer from "../features/relatedColumnsSlice";
import relatedFilterSettingsReducer from "../features/relatedFilterSettingsSlice";
import relatedGroupSettingsReducer from "../features/relatedGroupSettingsSlice";
import relatedSortSettingsReducer from "../features/relatedSortSettingsSlice";
import relatedObjectReducer from "../features/relatedObjectSlice";
import relatedTemplateListReducer from "../features/relatedTemplateListSlice";
import relatedTemplateReducer from "../features/relatedTemplateSlice";
import selectedObjectReducer from "../features/objectSlice";
import selectedQueryReducer from "../features/querySlice";
import selectedTemplateReducer from "../features/templateSlice";
import sidebarReducer from "../features/sidebarSlice";
import socketReducer from "../features/socketSlice";
import sortSettingsReducer from "../features/sortSettingsSlice";

import templateListReducer from "../features/templateListSlice";
import userInfoReducer from "../features/userInfoSlice";

export const store = configureStore({
  reducer: {
    metadataMap: metadataMapReducer,
    columns: columnsReducer,
    filterSettings: filterSettingsReducer,
    groupSettings: groupSettingsReducer,
    objectList: objectListReducer,
    query: selectedQueryReducer,
    queryList: queryListReducer,
    relatedColumns: relatedColumnsReducer,
    relatedFilterSettings: relatedFilterSettingsReducer,
    relatedGroupSettings: relatedGroupSettingsReducer,
    relatedObject: relatedObjectReducer,
    relatedSortSettings: relatedSortSettingsReducer,
    relatedTemplate: relatedTemplateReducer,
    relatedTemplateList: relatedTemplateListReducer,
    selectedApp: appReducer,
    selectedObject: selectedObjectReducer,
    selectedTemplate: selectedTemplateReducer,
    selectedQuery: selectedQueryReducer,
    sidebarStatus: sidebarReducer,
    sortSettings: sortSettingsReducer,
    socket: socketReducer,

    templateList: templateListReducer,
    userInfo: userInfoReducer,
  },
});
