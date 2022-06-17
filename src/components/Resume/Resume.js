import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/CV_ENGLISH.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Freelance developer"
              date="2020 (December - Present)"
              content={[
                "Realize interfaces for mobile and desktop taking into account ergonomic constraints at user level",
                "set up the design and development of web, desktop and mobile applications.",
                "Developping the mobile application for patients with Ionic Angular.",
                "Interconnecting the backend and the mobile app with APIs.",
              ]}
            />
            <Resumecontent
              title="Full-Stack Developer Foliatech Tangier"
              date="2020 (March - November)"
              content={[
                "Develop solutions (web - mobile) aimed at optimizing the efficiency of internal services the relationship with business customers and their partners: ",
                "Developping the front-end and Backend ot the web application Billing Management.",
                "Using: Angular, Chart.js, Advanced Pie Chart, angular-calendar, bootstrap, ionic, Sql, iTextSharp, c#, EntityFrameworkCore, Linq, AutoMapper, SmartGit, MariaDB.",
              ]}
            />
            <Resumecontent
              title="Freelance with logicworks.ma"
              date="2019 (August - March)"
              content={[
                "Worked on projects building CRMs from the ground up to meet customer needs.",
                "Worked on projects on-demand delivery platforms and jobs platform.",
                "Customize existing modules and create new ones for customized customer needs.",
                "Using: PHP, Codeigniter, Shopify, htmltopdf, GroceryCRUD, Mysql.",
              ]}
            />
            <Resumecontent
              title="End of studies project within TEOS Tangier"
              date="2019 (February -August)"
              content={[
                "Implementation of an electronic document management solution.",
                "Using: Alfresco, Angular, Mysql, PostgreSQL.",
              ]}
            />
            <Resumecontent
              title="Full-Stack Developer within NUTEK"
              date="2018 (July-October)"
              content={[
                "Design and Development of a web application",
                "Build Recruitment Test (MCQ) and HR Management.",
                "Using: Angular, NodeJs. MongoDB, HTML5, CSS3, Bootstrap3, JavaScript, jQuery.",
              ]}
            />
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="National School Of Applied Science In Tangier, ENSAT"
              date="2016 - 2019"
              content={["Engineering cycle, Computer engineering. "]}
            />
            <Resumecontent
              title="National School Of Applied Science In Tangier, ENSAT"
              date="2013 - 2016"
              content={["Preparatory Classes, Mathematics and Physics Branch"]}
            />
            <Resumecontent
              title="Tangier Reference : Mohamed el fateh school"
              date="2012 - 2013"
              content={["Scientific Baccalaureat, Physical Sciences Option, Mention : Good"]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Personal Projects</h3>
            <Resumecontent
              title="Manage Courses"
              content={[
                "Computer application that allows you to manage the courses, the subjects taught, the pupils as well as the marks and absences of the pupils.",
                "Using: C#, ASP.NET MVC, MySQL, SQL SERVER.",
              ]}
            />
            <Resumecontent
              title="Managing Categories And Products"
              content={[
                "Development of an application based on a micro service architecture.",
                "Using : ReactJs, Laravel, PostgreSQL.",
              ]}
            />
            <Resumecontent
              title="Android application for SQLITE database management"
              content={[
                "Android application which allows you to create SQLITE databases.",
                "Create tables, Add data, Delete data, Display data in grid form, User management",
                "JAVA, SQLITE, ANDROID STUDIO",
              ]}
            />
            <Resumecontent
              title="Department and Employee Management"
              content={[
                "Web Application.",
                "JEE (JPA, JSP, Servlet, Spring, Hibernate), MySQL.",
              ]}
            />
            <h3 className="resume-title">Activities & Interests</h3>
            <Resumecontent
              title=""
              content={[
                "Extracurricular: May 2016 | Member Of The IT-DAY Organizing Committee",
                "Graphic Designer,  Build some personal projects.",
                "Reading: Personal development books, Biographies.",
                "Sport : Walking, Fitness, Cycling",
                "Travelling, Gaming",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
