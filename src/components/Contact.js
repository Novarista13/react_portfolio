import React from "react";
import TextForm from "./Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Contact() {
  return (
    <>
      <div id="contact-section" style={{ marginTop: "100px", opacity: "0" }}>
        to make navlink does not go over the component
      </div>
      <Container className="contact-section" id="contact-section">
        <Card style={{ backgroundColor: "transparent", color: "white" }}>
          <Row>
            <Col sm={5} xs={12}>
              <TextForm />
            </Col>
            <Col>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11830397.329135839!2d85.98553213308874!3d18.714423246918535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305652a7714e2907%3A0xba7b0ee41c622b11!2sMyanmar%20(Burma)!5e1!3m2!1sen!2ssg!4v1695830854624!5m2!1sen!2ssg"
                width="100%"
                height="100%"
                title="location-map"
                style={{ border: 0, borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}






