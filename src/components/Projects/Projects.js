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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portfoliyo Using Html,css,Bootstrap"
              description="This is a responsive portfolio website designed and developed using HTML, CSS, and Bootstrap 5. The goal of this project is to create a clean, modern, and professional-looking personal portfolio that highlights a developer's skills, projects, resume, and contact information.The website layout adapts to all screen sizes using Bootstrap’s grid system and responsive utilities, ensuring it looks great on desktops, tablets, and mobile devices.."
              ghLink="https://github.com/DakshPatel6751/portfoliyo-Project"
              demoLink="https://portfoliyo-project.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
