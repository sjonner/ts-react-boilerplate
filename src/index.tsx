import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppProvider } from "./useAppState";
import { App } from "./App";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("example")
);
