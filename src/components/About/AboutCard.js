import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Atseneh Abate </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            I am currently employed as a software developer at Red Cloud ICT Solution.
            <br />
             I have successfully completed an Integrated Bachelor of Science in Computer Engineering from Addis Ababa University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading 
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
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
