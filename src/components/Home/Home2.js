import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A highly motivated person, dynamic, persevering and rigorous.
              <br />
              <br /> I'm{" "}
              <b className="purple">Web & Mobile Engineering Student </b>
              from ENSAT, Tangier. My Graduation will be in 2019.
              <br />
              <br />
              I create successful responsive websites that are 
              <b className="purple"> fast, easy to use </b>, and built with best practices
              My field of Interest's are building new &nbsp;
              <b className="purple"> Web Technologies and Products</b>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple"> JEE, Spring BOOT </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rabelamerany"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rabab-el-amerany-1000b318a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100040371572326"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
