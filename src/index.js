import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import App from "./App";
import "./index.css";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <App />
      </StyletronProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
