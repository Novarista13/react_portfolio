import React from "react";
import Text from "../decorations/TypeText";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function Hero() {

  return (
    <>
      <Container className="app-container" id="hero-section">
        <Row className="hero-section">
          <Col className="introduction">
            <div className="introduction-hi">
              Hi, There <span className="wave">👋🏻</span>
            </div>
            <div className="introduction-name">
              I'M <span className="my-name">MAY THIT HTUN</span>
            </div>
            <Text />
          </Col>
          <Col className="hero-img">
            <img
              width={500}
              src={require("../images/hero.gif")}
              alt="not found"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}