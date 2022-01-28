import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <ColorModeScript />
          <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
