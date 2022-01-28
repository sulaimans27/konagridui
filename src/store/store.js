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

export const store = configureStore({
  reducer: {
    selectedApp: appReducer,
    metadataMap: metadataMapReducer,
    selectedObject: selectedObjectReducer,
    selectedTemplate: selectedTemplateReducer,
    selectedQuery: selectedQueryReducer,
    relatedObject: relatedObjectReducer,
    relatedTemplate: relatedTemplateReducer,
    socket: socketReducer,
  },
});
