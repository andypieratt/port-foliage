import React from "react";
import { Github } from "@emotion-icons/bootstrap/Github";
import { Linkedin } from "@emotion-icons/bootstrap/Linkedin";
import { Twitter } from "@emotion-icons/bootstrap/Twitter";

function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/andypieratt"
        target="blank"
        rel="noopener noreferrer"
      >
        <Github size="30" />
      </a>
      <a
        href="https://www.linkedin.com/in/andrew-pieratt/"
        target="blank"
        rel="noopener noreferrer"
      >
        <Linkedin size="30" />
      </a>
      <a
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
