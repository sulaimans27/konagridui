import { configureStore } from "@reduxjs/toolkit";

import filterSettingsReducer from "../features/filterSettingsSlice";
import gridColumnsReducer from "../features/gridColumnsSlice";
import gridDataReducer from "../features/gridDataSlice";
import groupSettingsReducer from "../features/groupSettingsSlice";
import metadataMapReducer from "../features/metadataMapSlice";
import objectListReducer from "../features/objectListSlice";
import queryListReducer from "../features/queryListSlice";
import queryBuilderVisabilityReducer from "../features/queryBuilderVisabilitySlice";
import relatedGridColumnsReducer from "../features/relatedColumnsSlice";
import relatedFilterSettingsReducer from "../features/relatedFilterSettingsSlice";
import relatedGroupSettingsReducer from "../features/relatedGroupSettingsSlice";
import relatedSortSettingsReducer from "../features/relatedSortSettingsSlice";
import relatedObjectReducer from "../features/relatedObjectSlice";
import relatedTemplateFieldsReducer from "../features/relatedTemplateFieldsSlice";
import relatedTemplateListReducer from "../features/relatedTemplateFieldsSlice";
import selectedAppReducer from "../features/selectedAppSlice";
import selectedAppTitleReducer from "../features/selectedAppTitleSlice";
import selectedObjectReducer from "../features/objectSlice";
import selectedQueryReducer from "../features/querySlice";
import selectedRelatedTemplateReducer from "../features/selectedRelatedTemplateSlice";
import selectedTemplateReducer from "../features/selectedTemplateSlice";
import sidebarSizeReducer from "../features/sidebarSizeSlice";
import socketReducer from "../features/socketSlice";
import sortSettingsReducer from "../features/sortSettingsSlice";
import templateListReducer from "../features/templateListSlice";
import templateFieldsReducer from "../features/templateFieldsSlice";
import userInfoReducer from "../features/userInfoSlice";

export const store = configureStore({
  reducer: {
    gridColumns: gridColumnsReducer,
    filterSettings: filterSettingsReducer,
    gridData: gridDataReducer,
    groupSettings: groupSettingsReducer,
    metadata: metadataMapReducer,
    metadataMap: metadataMapReducer,
    objectList: objectListReducer,
    query: selectedQueryReducer,
    queryList: queryListReducer,
    queryBuilderVisible: queryBuilderVisabilityReducer,
    relatedGridColumns: relatedGridColumnsReducer,
    relatedFilterSettings: relatedFilterSettingsReducer,
    relatedGroupSettings: relatedGroupSettingsReducer,
    relatedObject: relatedObjectReducer,
    relatedSortSettings: relatedSortSettingsReducer,
    relatedTemplateFields: relatedTemplateFieldsReducer,
    relatedTemplateList: relatedTemplateListReducer,
    selectedApp: selectedAppReducer,
    selectedAppTitle: selectedAppTitleReducer,
    selectedObject: selectedObjectReducer,
    selectedRelatedTemplate: selectedRelatedTemplateReducer,
    selectedTemplate: selectedTemplateReducer,
    selectedQuery: selectedQueryReducer,
    sidebarSize: sidebarSizeReducer,
    sortSettings: sortSettingsReducer,
    socket: socketReducer,
    templateList: templateListReducer,
    templateFields: templateFieldsReducer,
    userInfo: userInfoReducer,
  },
});
