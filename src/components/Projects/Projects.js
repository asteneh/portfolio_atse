import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="accent">Legendary </strong> Works
        </h1>
        <p style={{ color: "white" }}>
          Behold the digital monuments I've built over the years.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Enterprise ERP System"
              description="A massive ERP system for finance, HRMS, and stock. It's essentially the brain of an entire company—hopefully, a smart one."
              ghLink="https://github.com/atseneh/ERP_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="G_CRM System"
              description="A complete CRM with lead management and omnichannel chat. Built in 2.5 months, it's faster than your average delivery pizza."
              ghLink="https://github.com/atseneh/G_CRM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Order Management System"
              description="A web app for tracking fees and products. Because knowing where your money goes is better than guessing."
              ghLink="https://github.com/atseneh/Order_Manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ethiopian TV & Radio Stream"
              description="Live streaming app built with React Native. Bringing the high-voltage energy of Ethiopian media to your tiny screen."
              ghLink="https://github.com/atseneh/Ethio_Stream"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Event Suggestion System"
              description="AI-based recommendations for cool stuff to do. Useful for people who think 'refreshing a browser' is an outdoor activity."
              ghLink="https://github.com/atseneh/Event_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Dynamic File Manager"
              description="A Node.js/MongoDB system for category-based file uploads. Keeping your digital mess in organized folders."
              ghLink="https://github.com/atseneh/File_Magic"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify} // Reusing image as placeholder for more projects
              isBlog={false}
              title="Milk Test Web App"
              description="QR scanning and milk test results dashboard. The first line of defense between the cow and your cereal bowl."
              ghLink="https://github.com/atseneh/Milk_Tester"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Voucher Attachment System"
              description="Production-optimized AJAX file upload system. Because uploading files shouldn't feel like a dial-up experience."
              ghLink="https://github.com/atseneh/Voucher_Upload"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Company Website Dashboard"
              description="A full CMS dashboard for corporate websites. Giving non-techies the power to break—I mean, update—things easily."
              ghLink="https://github.com/atseneh/Dashboard_X"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Omnichannel CRM"
              description="A multi-channel communication platform. Reach your customers everywhere, like an over-attached ex, but more professional."
              ghLink="https://github.com/atseneh/Omni_CRM"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
