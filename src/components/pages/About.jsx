import { Container, Col, Row, Image } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container className="align-content-center" id="about">
      <Row>
        <h1 className="text-center align-content-center">About Me</h1>
        <Col sm={6} md={6} xs={12} className="d-none d-lg-block">
          <Image src="about.png" className="img-fluid" />
        </Col>
        <Col sm={6} md={6} xs={12}>
          <div className=" infomations px-md-0">Personal infomations </div>

          <ul className=" mt-4 px-md-0 px-2 about-info">
            <li className="d-flex">
              <span>Name:</span> <span>Nguyen Viet Hoang</span>
            </li>
            <li className="d-flex">
              <span>Date of birth:</span> <span>November 01, 2003</span>
            </li>
            <li className="d-flex">
              <span>Hometown:</span> <span>Hanoi City</span>
            </li>
            <li className="d-flex">
              <span>Email:</span> <span>nguyenhoang.miyuka@gmail.com</span>
            </li>
            <li className="d-flex">
              <span>Phone: </span> <span>(+84)333853767</span>
            </li>
          </ul>

          <div className=" project px-md-0">
            <span>2</span> Project Complete
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
