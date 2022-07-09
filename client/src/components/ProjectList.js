import React from "react";
import Projects from "./pages/Projects";

const projectList = [
  {
    id: 1,
    name: {
      title: "Almost-FAIM-ous",
    },
    description: {
      role: "Front-End and Back-End Javascript",
      technologies: "mySQL, Sequelize, Express, Socket.io, Bcrypt",
      about:
        "Almost-FAIM-ous if the second group poroject that I have been involved with and our group created a retro chat application that mirrors the essence of the old AOL chatrooms.",
    },
    links: {
      github: "https://github.com/andypieratt/Almost-FAIM-ous",
      deployed: "https://almost-faim-ous.herokuapp.com/",
    },
    image: "",
  },
  {
    id: 2,
    name: {
      title: "Ultimate Fan App",
    },
    description: {
      role: "Front-End HTML and CSS",
      technologies: "Bootstrap, Moment.JS, Third-Party API's(Spotify/SeatGeek)",
      about:
        "Ultimate Fan App is the first group project that I was involved with and this application allows users to search for a musical artists and the page will render that artist's social media channels, Spotify widget that plays some of their top songs, and all upcoming shows/events for that artist all via API calls.",
    },
    links: {
      github: "https://github.com/andypieratt/project-1",
      deployed: "https://andypieratt.github.io/project-1/",
    },
  },
];
