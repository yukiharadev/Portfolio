import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { ReactSVG } from "react-svg";

const SchoolItem = () => {
  return (
    <ReactSVG
      afterInjection={(svg) => {
        console.log(svg);
      }}
      beforeInjection={(svg) => {
        svg.classList.add("svg-class-name");
        svg.setAttribute(
          "style",
          "width: 50px; height: 50px; fill : white; padding: 10px; margin-right: 10px;background-color: #3e64ff; border-radius: 50%;"
        );
      }}
      src="school.svg"
    />
  );
};

const Education = () => {
  return (
    <Container id="education">
      <Row>
        <Col md={3}>
          <nav className="position-sticky lh-lg " style={{ top: "180px" }}>
            <ul className="list-unstyled">
              <li>
                <a href="#page1">Education</a>
              </li>
              <li>
                <a href="#page2">Skill</a>
              </li>
              <li>
                <a href="#page3">My Project</a>
              </li>
            </ul>
          </nav>
        </Col>
        <Col md={9}>
          <div id="page1">
            <h3>Education</h3>
            <div className="d-flex bd-highlight line-bottom">
              <div className="text-center align-content-center">
                <SchoolItem />
              </div>
              <div className="content-edu">
                <span>2021 - </span>
                <h2>Student</h2>
                <span>Dai Nam University</span>
              </div>
            </div>
          </div>
          <div id="page2">
            <h3>Skill</h3>
          </div>
          <div id="page3">
            <h3>My Project</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
