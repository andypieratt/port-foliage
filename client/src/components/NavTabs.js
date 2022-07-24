import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  navbar: {
    display: "flex",
    background: "#6a1b9a",
    height: "80px",
    width: "auto",
    alignItems: "center",
    textAlign: "end",
  },
  h1: {
    textAlign: "left",
  },
  a: {
    color: "white",
    fontSize: "1.3rem",
    textDecoration: "none",
    padding: "10px",
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav>
      <div>
        <h1>Andrew Pieratt</h1>
      </div>
      <div>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active" to="/projects">
          Projects
        </NavLink>
        <NavLink exact activeClassName="active" to="/resume">
          Resume
        </NavLink>
        <NavLink exact activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default NavTabs;
