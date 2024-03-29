import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import ReduxProvider from "./providers/ReduxProvider.tsx";
import PrivateReduxProvider from "./providers/PrivateReduxProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <BrowserRouter>
        <PrivateReduxProvider>
          <App />
        </PrivateReduxProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
