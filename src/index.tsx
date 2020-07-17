import "./wdyr";
import "react-hot-loader";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppProvider } from "./useAppState";
import { HotApp } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <HotApp />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("⚛")
);

// import { mkWidget, Widget } from "widgets-for-react";

// const Test = ({ refresh }) => <div />;

// export const styleguide: Widget<never> = mk_widget({
//   run: (refresh) => <Test refresh={refresh} />,
// });
