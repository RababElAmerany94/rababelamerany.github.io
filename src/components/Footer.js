import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Rabab El Amerany</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/rabelamerany" style={{ color: "white" }}>
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rabab-el-amerany-1000b318a/"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.facebook.com/profile.php?id=100040371572326"
                style={{ color: "white" }}
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
