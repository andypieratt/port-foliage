import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
