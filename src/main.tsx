import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Routes } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Routes>
      <App />
    </Routes>
  </React.StrictMode>
);
