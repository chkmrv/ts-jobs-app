import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import { debugContextDevtool } from 'react-context-devtool';
import "./assets/index.css";

const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
debugContextDevtool(container);
