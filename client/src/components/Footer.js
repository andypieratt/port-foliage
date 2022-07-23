import React from "react";
import { Github } from "@emotion-icons/bootstrap/Github";
import { Linkedin } from "@emotion-icons/bootstrap/Linkedin";
import { Twitter } from "@emotion-icons/bootstrap/Twitter";

const styles = {
  footer: {
    borderTop: "3px solid black",
    position: "fixed",
    bottom: 0,
    width: "100%",
    display: "flex",
    backgroundColor: "black",
    justifyContent: "center",
    paddingTop: ".5rem",
    paddingBottom: ".5rem",
  },
  a: {
    margin: ".25rem",
  },
};

function Footer() {
  return (
    <footer style={styles.footer}>
      <a
        style={styles.a}
        href="https://github.com/andypieratt"
        target="blank"
        rel="noopener noreferrer"
      >
        <Github size="30" />
      </a>
      <a
        style={styles.a}
        href="https://www.linkedin.com/in/andrew-pieratt/"
        target="blank"
        rel="noopener noreferrer"
      >
        <Linkedin size="30" />
      </a>
      <a
        style={styles.a}
        href="https://twitter.com/andypieratt"
        target="blank"
        rel="noopener noreferrer"
      >
        <Twitter size="30" />
      </a>
    </footer>
  );
}

export default Footer;
