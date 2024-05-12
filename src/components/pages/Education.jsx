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
      <Row className="mt-3">
        <Col md={3}>
          <nav className="position-sticky lh-lg " style={{ top: "100px" }}>
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
          <div id="page1" style={{ paddingTop: "60px" }}>
            <h3>Education</h3>
            <div className="d-flex bd-highlight line-bottom mt-3">
              <div className="text-center align-content-center">
                <SchoolItem />
              </div>
              <div className="content-card">
                <span>2021 - </span>
                <h2>Student</h2>
                <span>Dai Nam University</span>
              </div>
            </div>
            <div className="d-flex bd-highlight line-bottom mt-3">
              <div className="text-center align-content-center">
                <SchoolItem />
              </div>
              <div className="content-card">
                <span>2018 - 2021 </span>
                <h2>Student</h2>
                <span>Dong Quan High School</span>
              </div>
            </div>
          </div>
          <div id="page2" style={{ paddingTop: "60px" }}>
            <h3>Skills</h3>
            <Row className="my-2 line-bottom">
              <Col md={3} className="align-items-center d-flex bg-highlight ">
                <span className="fw-bold h4">Backend</span>
              </Col>
              <Col md={9}>
                <img
                  src="https://skillicons.dev/icons?i=nodejs,express,dotnet,mongo&perline=6"
                  alt=""
                />
              </Col>
            </Row>
            <Row className="my-2 line-bottom">
              <Col md={3} className="align-items-center d-flex bg-highlight ">
                <span className="fw-bold h4">Front-End</span>
              </Col>
              <Col md={9}>
                <img
                  src="https://skillicons.dev/icons?i=react,next,bootstrap,tailwind&perline=6"
                  alt=""
                />
              </Col>
            </Row>
            <Row className="my-2 line-bottom">
              <Col md={3} className="align-items-center d-flex bg-highlight ">
                <span className="fw-bold h4">Mobile</span>
              </Col>
              <Col md={9}>
                <img
                  src="https://skillicons.dev/icons?i=react,flutter,kotlin&perline=6"
                  alt=""
                />
              </Col>
            </Row>
          </div>
          <div id="page3" style={{ paddingTop: "60px" }}>
            <h3>My Project</h3>
            <div className="d-flex bd-highlight line-bottom mt-3">
              <div className="text-center align-content-center">
                <SchoolItem />
              </div>
              <div className="content-card">
                <span>BackEnd CRUD NodeJS ComputerServices </span>
                <h2>NodeJS API Computer Services</h2>
                <span>ExpressJs, multer, Mongodb, JWT,....</span>
                <h6 className="mt-3">
                  <a href="https://github.com/yukiharasensei/node-express-computer-repair.git">
                    Github Repo
                  </a>
                </h6>
              </div>
            </div>
            <div className="d-flex bd-highlight line-bottom mt-3">
              <div className="text-center align-content-center">
                <SchoolItem />
              </div>
              <div className="content-card">
                <span>Game Application </span>
                <h2>T-Rex Game</h2>
                <span>Using Python and PyGame with Team GDSC - Probation</span>
                <h6 className="mt-3">
                  <a href="https://github.com/yukiharasensei/Trex_Pygame.git">
                    Github Repo
                  </a>
                </h6>
              </div>
            </div>
            <div className="d-flex bd-highlight line-bottom mt-3">
              <div className="text-center align-content-center">
                <SchoolItem />
              </div>
              <div className="content-card">
                <span>Mobile Application </span>
                <h2>Facebook Clone Homepage</h2>
                <span>Android Application using Kotlin Jetpack Compose</span>
                <h6 className="mt-3">
                  <a href="https://github.com/yukiharasensei/facebook_compose_GDSC.git">
                    Github Repo
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
