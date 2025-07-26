import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";
import "./App.css";

// Importing all components
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import Products from "./Components/Products";
import FindUs from "./Components/FindUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import OrderNow from "./Components/Ordernow";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/store-locator" element={<FindUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/order" element={<OrderNow />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
