import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">AM I?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Technical <strong className="purple">Skills </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-java-plain-wordmark" />
          <Techstack iconName="devicon-spring-plain" />
          <Techstack iconName="devicon-tomcat-line-wordmark" />
          <Techstack iconName="devicon-android-plain" />
          <Techstack iconName="devicon-csharp-plain" />
          <Techstack iconName="devicon-dot-net-plain-wordmark" />
          <Techstack iconName="devicon-firebase-plain" />
          <Techstack iconName="devicon-mysql-plain" />
          <Techstack iconName="devicon-html5-plain" />
          <Techstack iconName="devicon-css3-plain" />
          <Techstack iconName="devicon-sass-original" />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-nodejs-plain-wordmark" />
          <Techstack iconName="devicon-python-plain-wordmark" />
          <Techstack iconName="devicon-laravel-plain" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-github-original" />
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="devicon-npm-original-wordmark" />
          <Techstack iconName="devicon-photoshop-plain" />
        </Row>
      </Container>
    </Container>
  );
}

export default About;
