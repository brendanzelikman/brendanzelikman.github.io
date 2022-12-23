import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Press+Start+2P&display=swap');
    </style>
  </React.StrictMode>
);
