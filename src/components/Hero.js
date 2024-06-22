import React from "react";
import Text from "../decorations/TypeText";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function Hero() {
  return (
    <>
      <Container className="hero-container" id="hero-section">
        <Row className="hero-section">
          <Col xl={7} lg={6} md={6} sm={12} className="introduction">
            <div className="introduction-hi">
              Hi, There <span className="wave">👋🏻</span>
            </div>
            <div className="introduction-name">
              I'M <span className="my-name">MAY THIT HTUN</span>
            </div>
            <Text />
            <a
              className="nav-link mt-3"
              style={{ width: "fit-content" }}
              href="/maythithtun.pdf"
              download="MayThitHtun.pdf"
            >
              <button className="work-modal-button">Download CV</button>
            </a>
          </Col>
          <Col xl={5} lg={6} md={6} className="hero-img">
            <img
              width="100%"
              className="hero-gif"
              src={require("../images/hero2.gif")}
              alt="hero"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
