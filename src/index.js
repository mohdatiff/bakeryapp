import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ Import Bootstrap CSS and JS (for Carousel, Navbar toggler, etc.)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
