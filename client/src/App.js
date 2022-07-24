import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <NavTabs />
        <PortfolioContainer />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
