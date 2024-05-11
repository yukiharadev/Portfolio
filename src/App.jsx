// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/layout/Header";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/About";
import "./css/style.css";
import Education from "./components/pages/Education";
import ContactPage from "./components/pages/ContactPage";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <HomePage />
        <AboutPage />
        <Education />
        <ContactPage />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
