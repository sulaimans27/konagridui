import { configureStore } from "@reduxjs/toolkit";

import columnsReducer from "../features/columnsSlice";
import filterSettingsReducer from "../features/filterSettingsSlice";
import gridDataReducer from "../features/gridDataSlice";
import groupSettingsReducer from "../features/groupSettingsSlice";
import metadataMapReducer from "../features/metadataMapSlice";
import objectListReducer from "../features/objectListSlice";
import queryListReducer from "../features/queryListSlice";
import queryBuilderVisabilityReducer from "../features/queryBuilderVisabilitySlice";
import relatedColumnsReducer from "../features/relatedColumnsSlice";
import relatedFilterSettingsReducer from "../features/relatedFilterSettingsSlice";
import relatedGroupSettingsReducer from "../features/relatedGroupSettingsSlice";
import relatedSortSettingsReducer from "../features/relatedSortSettingsSlice";
import relatedObjectReducer from "../features/relatedObjectSlice";
import relatedTemplateListReducer from "../features/relatedTemplateListSlice";
import relatedTemplateReducer from "../features/relatedTemplateSlice";
import selectedAppReducer from "../features/selectedAppSlice";
import selectedObjectReducer from "../features/objectSlice";
import selectedQueryReducer from "../features/querySlice";
import selectedTemplateReducer from "../features/templateSlice";
import sidebarSizeReducer from "../features/sidebarSizeSlice";
import socketReducer from "../features/socketSlice";
import sortSettingsReducer from "../features/sortSettingsSlice";
import templateListReducer from "../features/templateListSlice";
import templateFieldListReducer from "../features/templateFieldListSlice";
import userInfoReducer from "../features/userInfoSlice";

export const store = configureStore({
  reducer: {
    columns: columnsReducer,
    filterSettings: filterSettingsReducer,
    gridData: gridDataReducer,
    groupSettings: groupSettingsReducer,
    metadata: metadataMapReducer,
    metadataMap: metadataMapReducer,
    objectList: objectListReducer,
    query: selectedQueryReducer,
    queryList: queryListReducer,
    queryBuilderVisible: queryBuilderVisabilityReducer,
    relatedColumns: relatedColumnsReducer,
    relatedFilterSettings: relatedFilterSettingsReducer,
    relatedGroupSettings: relatedGroupSettingsReducer,
    relatedObject: relatedObjectReducer,
    relatedSortSettings: relatedSortSettingsReducer,
    relatedTemplate: relatedTemplateReducer,
    relatedTemplateList: relatedTemplateListReducer,
    selectedApp: selectedAppReducer,
    selectedObject: selectedObjectReducer,
    selectedTemplate: selectedTemplateReducer,
    selectedQuery: selectedQueryReducer,
    sidebarSize: sidebarSizeReducer,
    sortSettings: sortSettingsReducer,
    socket: socketReducer,
    templateList: templateListReducer,
    templateFieldList: templateFieldListReducer,
    userInfo: userInfoReducer,
  },
});
