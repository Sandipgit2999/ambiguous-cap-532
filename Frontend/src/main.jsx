import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowswerRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowswerRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowswerRouter>
  </React.StrictMode>
);
