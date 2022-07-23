import React from "react";

const styles = {
  img: {
    width: "400px",
    height: "500px",
    marginRight: "5rem",
  },
  about: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "2rem",
    padding: "2rem",
  },
};

export default function Home() {
  return (
    <div style={styles.about}>
      <img style={styles.img} src="./images/profile-img-placeholder.jpg"></img>
      <br></br>
      <div>
        <h2 style={styles.h1}>About Me:</h2>
        <p style={styles.p}>
          Hi, my name is Andrew (Andy) Pieratt. In May of 2021 graduated from
          the University of Colorado - Denver with a Bachelor's Degree in Music
          Business. In 2022, I decided to pursue a certification from The
          University of Denver for Coding and Full-Stack Web Development to add
          to my repetoir of skills. Please navigate to the "Projects" section to
          view some of my favorite works!
        </p>
        <p>
          I am a very creative person and I try to add that creativity to all of
          the works I create. I am a Rock/Heavy Metal drummer and I love to
          spend most of my free-time practicing and creating music. Whatever
          time I have left, I spend collecting and sourcing vintage clothing and
          furniture.
        </p>
      </div>
    </div>
  );
}
