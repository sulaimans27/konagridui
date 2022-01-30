import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../features/appSlice";
import metadataMapReducer from "../features/metadataMapSlice";
import selectedObjectReducer from "../features/objectSlice";
import selectedQueryReducer from "../features/querySlice";
import selectedTemplateReducer from "../features/templateSlice";
import sidebarReducer from "../features/sidebarSlice";
import socketReducer from "../features/socketSlice";
import relatedObjectReducer from "../features/relatedObjectSlice";
import relatedTemplateReducer from "../features/relatedTemplateSlice";
import userInfoReducer from "../features/userInfoSlice";
import objectListReducer from "../features/objectListSlice";
import templateListReducer from "../features/templateListSlice";
import queryListReducer from "../features/queryListSlice";
import relatedTemplateListReducer from "../features/relatedTemplateListSlice";

export const store = configureStore({
  reducer: {
    selectedApp: appReducer,
    metadataMap: metadataMapReducer,
    object: selectedObjectReducer,
    template: selectedTemplateReducer,
    query: selectedQueryReducer,
    relatedObject: relatedObjectReducer,
    relatedTemplate: relatedTemplateReducer,
    objectList: objectListReducer,
    templateList: templateListReducer,
    queryList: queryListReducer,
    relatedTemplateList: relatedTemplateListReducer,
    userInfo: userInfoReducer,
    socket: socketReducer,
    sidebarStatus: sidebarReducer,
  },
});
