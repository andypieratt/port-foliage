import React from "react";

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
    <nav style={styles.navbar}>
      <a
        style={styles.a}
        href="#home"
        onClick={() => handlePageChange("Home")}
        className={currentPage === "Home" ? "nav-link active" : "nav-link"}
      >
        Home
      </a>
      <a
        style={styles.a}
        href="#projects"
        onClick={() => handlePageChange("Projects")}
        className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
      >
        Projects
      </a>
      <a
        style={styles.a}
        href="#resume"
        onClick={() => handlePageChange("Resume")}
        className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
      >
        Resume
      </a>
      <a
        style={styles.a}
        href="#contact"
        onClick={() => handlePageChange("Contact")}
        className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
      >
        Contact
      </a>
    </nav>
  );
}

export default NavTabs;
