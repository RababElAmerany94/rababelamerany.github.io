import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey There, I am <span className="purple">Rabab El Amerany </span>,
            Web & Mobile Engineering  from{" "}
            <span className="purple"> ENSAT</span> - Tangeir, Morocoo.
            <br />
            <br />
            I am a passionate person who pursues his dreams, who works hard and who is results oriented. 
            As a matter of fact, I constantly work on improving myself seeking to achieve the best version of myself.
            <br />
            <br />
            An enthusiast for building tech products with full-stack software development experience. 
            I am passionate about and capable of working with a wide range of technologies 
            and am well-versed especially in  : 
            <span className="purple"> JavaScript, Typescript, JEE, Angular, Reacts.Js, PHP(Laravel...), Ionic 
            and C# related tech </span>. In addition to keeping my technical skills updated, I am always keen to 
            learn something new. Additionally, I am enjoys and has a keen interest in:
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Graphic Designer
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> build some personal projects
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> travelling
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> gaming
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> reading
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
