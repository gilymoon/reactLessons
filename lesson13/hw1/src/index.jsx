import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>,
  rootElement
);
