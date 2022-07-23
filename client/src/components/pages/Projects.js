import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Github } from "@emotion-icons/bootstrap/Github";

const projectList = [
  {
    id: 1,
    title: "Almost-FAIM-ous",
    technologies: "mySQL, Sequelize, Express, Socket.io, Bcrypt",
    role: "Front-End and Back-End Javascript",
    description:
      "Almost-FAIM-ous if the second group poroject that I have been involved with and our group created a retro chat application that mirrors the essence of the old AOL chatrooms.",
    links: {
      github: "https://github.com/andypieratt/Almost-FAIM-ous",
      deployed: "https://almost-faim-ous.herokuapp.com/",
    },
    image: "./images/almost-faim-ous-main-img.png",
  },
  {
    id: 2,
    title: "Ultimate Fan App",
    role: "Front-End HTML and CSS",
    technologies: "Bootstrap, Moment.JS, Third-Party API's(Spotify/SeatGeek)",
    description:
      "Ultimate Fan App is the first group project that I was involved with and this application allows users to search for a musical artists and the page will render that artist's social media channels, Spotify widget that plays some of their top songs, and all upcoming shows/events for that artist all via API calls.",
    links: {
      github: "https://github.com/andypieratt/project-1",
      deployed: "https://andypieratt.github.io/project-1/",
    },
    image: "./images/ultimate-fan-app.png",
  },
];

const styles = {};

export default function Projects(props) {
  return (
    <Row xs={1} md={2} className="g-4">
      {projectList.map((data) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>Technologies Used: {data.technologies}</Card.Text>
              <Card.Text>Role: {data.role}</Card.Text>
              <Card.Text>{data.description}</Card.Text>
              <a href={data.links.github}>
                <Github size={35} />
              </a>
              <br></br>
              <br></br>
              <button>
                <a
                  href={data.links.deployed}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Application Link!
                </a>
              </button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
