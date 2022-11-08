import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowswerRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowswerRouter>
      <Provider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>

      </Provider>
    </BrowswerRouter>
  </React.StrictMode>
);
