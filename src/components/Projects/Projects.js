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
                 <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="i Watch "
              description="The Apple Watch, commonly referred to as the iWatch, is a line of smartwatches designed and manufactured by Apple Inc. It combines advanced technology with elegant design, offering a range of features to help users stay connected, monitor their health, and manage daily tasks efficiently.."
              ghLink="https://github.com/DakshPatel6751/i-watch-project"
              demoLink="https://i-watch-project.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Shark Tenk "
              description="Shark Tank is a popular American television show where aspiring entrepreneurs pitch their business ideas to a panel of wealthy investors, known as the “Sharks,” in hopes of securing investment funding. The show offers a platform for inventors, small business owners, and startups to present their products or services and negotiate deals."
              ghLink="https://github.com/DakshPatel6751/Shark-Tenk-"
              demoLink="https://shark-tenk.vercel.app/"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Heppentance "
              description="Heppentance is a popular website."
              ghLink="https://github.com/DakshPatel6751/Heppentance-project"
              demoLink="https://heppentance-project.vercel.app/"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chariter"
              description="Chariter is a modern, responsive website designed for charity organizations, non-profits, fundraising campaigns, and humanitarian causes. Built to inspire trust and compassion, Chariter helps organizations connect with supporters, share their mission, and collect donations online."
              ghLink="https://github.com/DakshPatel6751/chariter-Project"
              demoLink="https://chariter-project-g2m7.vercel.app/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Dento"
              description="Dento is a clean, professional, and user-friendly dental clinic website designed to provide patients with easy access to quality dental care information and services. Built with modern aesthetics and responsive design, Dento is perfect for dentists, dental clinics, and oral healthcare providers."
              ghLink="https://github.com/DakshPatel6751/Dento-project"
              demoLink="https://dento-project.vercel.app/"
            />
          </Col>




          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
