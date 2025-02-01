import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import Headermain from "../header";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, [pathname]);

  return null; // No UI for this component
}

export default function App() {
  return (
  <div className="start">
    <Router basename={process.env.PUBLIC_URL}>
      {/* Scroll to Top on Route Change */}
      <ScrollToTop />
      {/* Header */}
      <Headermain />

      {/* App Routes */}
      <AppRoutes />
      <Portfolio />
      <About />
      <ContactUs />
    </Router>
    </div>
  );
}
