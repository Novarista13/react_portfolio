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
          <Col xl={7} lg={6} sm={12} className="introduction">
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
              width={470}
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
