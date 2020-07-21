import "./wdyr";
import "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import { AppStateProvider } from "./useAppState";
import { HotApp } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <HotApp />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("⚛")
);

// import { mkWidget, Widget } from "widgets-for-react";

// const Test = ({ refresh }) => <div />;

// export const styleguide: Widget<never> = mk_widget({
//   run: (refresh) => <Test refresh={refresh} />,
// });
