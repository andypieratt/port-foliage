import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  navbar: {
    display: "flex",
    width: "100%",
    padding: "0.5rem",
    justifyContent: "space-between",
    backgroundColor: "black",
    color: "white",
    marginBottom: "2rem",
    paddingBottom: "0.5rem",
    paddingTop: "0.5rem",
  },
  links: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "white",
    padding: ".25rem .5rem",
    margin: ".25rem",
    paddingRight: "2rem",
    fontSize: "1.2rem",
  },
  h1: {
    paddingLeft: "2rem",
  },
};

function NavTabs() {
  return (
    <nav style={styles.navbar}>
      <div>
        <h1 style={styles.h1}>Andrew Pieratt</h1>
      </div>
      <div style={styles.links}>
        <NavLink style={styles.links} exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink
          style={styles.links}
          exact
          activeClassName="active"
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          style={styles.links}
          exact
          activeClassName="active"
          to="/resume"
        >
          Resume
        </NavLink>
        <NavLink
          style={styles.links}
          exact
          activeClassName="active"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default NavTabs;
