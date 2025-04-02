import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./pages/App.tsx";
import "./index.css";
import storeLandbotConfig from "./lib/store/storeLandbotConfig";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={storeLandbotConfig}>
      <App />
    </Provider>
  </React.StrictMode>
);
