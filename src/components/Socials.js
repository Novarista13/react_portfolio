import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FaFacebook, FaTelegram, FaInstagram, FaGithub } from "react-icons/fa6";

export default function Socials() {
  return (
    <Container className="text-center social-section">
      <Row>
        <Col md={12}>
          <h5>
            Feel free to <span style={{ color: "#61DAFB" }}>connect</span> with
            me
          </h5>
          <ul className="social-links">
            <li className="social-icons">
              <FaGithub
                onClick={() => {
                  window.open("https://github.com/Novarista13");
                }}
              />
            </li>
            <li className="social-icons">
              <FaFacebook
                onClick={() => {
                  window.open("https://www.facebook.com/Nova.1302/");
                }}
              />
            </li>
            <li className="social-icons">
              <FaInstagram
                onClick={() => {
                  window.open("https://www.instagram.com/novarista_13/");
                }}
              />
            </li>
            <li className="social-icons">
              <FaTelegram
                onClick={() => {
                  window.open("https://t.me/Novarista_13");
                }}
              />
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}