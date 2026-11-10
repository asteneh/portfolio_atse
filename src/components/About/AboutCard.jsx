import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="accent">Atseneh Abate</span>, a
            <span className="accent"> Full Stack Maestro</span> from
            <span className="accent"> Addis Ababa, Ethiopia.</span>
            <br />
            With over <span className="accent">5.5 years</span> of turning complex logic into smooth ERP systems,
            I've climbed from a Programmer Lead at CNET to the Head of Web Development at Red Cloud.
            <br />
            I'm a BSc graduate in Computer Engineering from Addis Ababa University—where I learned to survive on coffee and clean code.
            <br />
            <br />
            When I'm not orchestrating servers or squashing bugs, you'll find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring the world (mostly looking for the perfect coffee)
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs (explaining my bugs to others)
            </li>
            <li className="about-activity">
              <ImPointRight /> Mastering the art of "Just one more line of code"
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Create with purpose, innovate with impact, and leave a legacy of meaningful change!"{" "}
          </p>
          <footer className="blockquote-footer">Me. </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
