import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import About from "./pages/pages/about/about.jsx";
import Contactus from "./pages/pages/about/contact us/contactus.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<Contactus />} />
    </Routes>
  </BrowserRouter>,
);
