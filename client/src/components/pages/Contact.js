import React from "react";

const styles = {
  h1: {
    marginLeft: "5px",
  },
  p: {
    fontSize: "20px",
    marginLeft: "5px",
  },
  li: {
    margin: "5px",
    fontSize: "20px",
  },
};

export default function Contact() {
  return (
    <div>
      <h1 style={styles.h1}>Contact</h1>
      <p style={styles.p}>
        Please contact or connect with me through the links below:
      </p>
      <ul>
        <li style={styles.li}>
          GitHub:
          <a
            href="https://github.com/andypieratt"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            @andypieratt
          </a>
        </li>
        <li style={styles.li}>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/andrew-pieratt/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Andrew Pieratt LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
