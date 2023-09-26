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
          <Col lg={6} sm={12} className="introduction">
            <div className="introduction-hi">
              Hi, There <span className="wave">👋🏻</span>
            </div>
            <div className="introduction-name">
              I'M <span className="my-name">MAY THIT HTUN</span>
            </div>
            <Text />
          </Col>
          <Col lg={6} sm={12} className="hero-img">
            <img
              width={500}
              className="hero-gif"
              src={require("../images/hero1.gif")}
              style={{background: "transparent"}}
              alt="not found"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}