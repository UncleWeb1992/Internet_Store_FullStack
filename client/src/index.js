import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.scss";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
