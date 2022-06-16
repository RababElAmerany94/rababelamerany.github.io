import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import billingManagementMobile from "../../Assets/Projects/billing_management_mobile.PNG";
import billingManagementWeb from "../../Assets/Projects/billing_management_web.PNG";
import deliveryService from "../../Assets/Projects/delivery_service.PNG";
import buildingManagement from "../../Assets/Projects/building_management.PNG";
import sqliteEditor from "../../Assets/Projects/sqlite_editor.PNG";
import track_orders from "../../Assets/Projects/track_orders.PNG";
import categoryProduct from "../../Assets/Projects/category_product_crud.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Coding <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={billingManagementWeb}
              title="Billing Management"
              description="Web solution aimed at optimizing the efficiency of internal services, the relationship with corporate customers and their partners with Angular, Core .NET, Chart.js, Advanced Pie Chart, angular-calendar, bootstrap...."
              link="https://github.com/rabelamerany/billing-management-web"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buildingManagement}
              title="Building Management"
              description="Building management and construction project management software coordinates business processes for contractors and builders. Businesses use building management systems to enable collaborative workflow and data access."
              link="https://github.com/rabelamerany/building-management"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={billingManagementWeb}
              title="Billing Management Api"
              description="Api solution aimed at optimizing the efficiency of internal services, the relationship with corporate customers and their partners with  Sql, iTextSharp, c#, EntityFrameworkCore, Linq, AutoMapper, MariaDB, Core.NET."
              link="https://github.com/rabelamerany/billing-management-api"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={categoryProduct}
              title="Category Product"
              description="When the number of references managed is high, the use of grouping products into categories becomes essential. The aim is to improve the management of products in the same group and to streamline inventory tracking."
              link="https://github.com/rabelamerany/category_product_crud"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deliveryService}
              title="Delivery Service"
              description="Delivery management software, also known as broker software, streamlines business delivery operations from start to finish. Delivery management software can be used by brokers, drivers, restaurant delivery, logistics and transportation companies."
              link="https://github.com/rabelamerany/delivery-service"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={track_orders}
              title="Track Orders Platform"
              description="Delivery management software, also known as broker software, streamlines business delivery operations from start to finish. Delivery management software can be used by brokers, drivers, restaurant delivery, logistics and transportation companies."
              link="https://github.com/rabelamerany/platform-to-track-orders"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={billingManagementMobile}
              title="Billing Management Mobile"
              description="Mobile solution aimed at piloting the commercial activity of the company, managing the relationship with customers, collecting, concentrating and analyzing customer data in Android and iOS applications with Ionic as the programming language."
              link="https://github.com/rabelamerany/billing-management-mobile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sqliteEditor}
              title="SQLITE database management"
              description="SqliteEditor is an Android application for SQLITE database management. Our goal is to create an application that will help users within a company; the goal is to provide them with an interface allowing basic manipulation of databases."
              link="https://github.com/rabelamerany/SQLITE-Editor"
            />
          </Col>
          <Col md={4} className="project-card">
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
