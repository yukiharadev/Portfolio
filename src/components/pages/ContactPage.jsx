import { Container } from "react-bootstrap";

const ContactPage = () => {
  return (
    <Container
      className="text-center align-content-center align-items-center vh-100 d-flex flex-column justify-content-center"
      id="contacts"
    >
      <h1>Connect With Me:</h1>
      <h6>Nguyen Viet Hoang | nguyenhoang.dev</h6>
      <div className="d-flex justify-content-center">
        <a
          className="me-3"
          href="https://www.fb.com/nguyenhwang.dev"
          target="_blank"
        >
          <div>
            <img
              src="https://img.shields.io/badge/facebook-%232E87FB.svg?&style=for-the-badge&logo=facebook&logoColor=white"
              alt="facebook"
              style={{ marginBottom: "5px" }}
            />
          </div>
        </a>
        <a
          className="me-3"
          href="https://github.com/yukiharasensei"
          target="_blank"
        >
          <div>
            <img
              src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white"
              alt="github"
              style={{ marginBottom: "5px" }}
            />
          </div>
        </a>

        <a className="me-3" href="mailto:nguyenhoang.miyuka@gmail.com">
          <div>
            <img
              src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
              alt="gmail"
            />
          </div>
        </a>

        <a className="me-3" href="https://t.me/nguyenhoangdev">
          <div>
            <img
              src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white"
              alt="Telegram"
            />
          </div>
        </a>

        <a className="me-3" href="tel:+84333853767">
          <div>
            <img
              src="https://img.shields.io/badge/Zalo-2CA5E0?style=for-the-badge&logo=zalo&logoColor=white"
              alt="Zalo"
            />
          </div>
        </a>
      </div>
    </Container>
  );
};

export default ContactPage;
