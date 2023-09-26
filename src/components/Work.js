import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { miniWorksData, worksData } from "../decorations/works/WorksData";
import { worksImage } from "../decorations/works/WorksImage";
import { worksText } from "../decorations/works/WorksText";

export default function Work() {
  return (
    <>
      <div id="work-section" style={{ marginTop: "100px", opacity: "0" }}>
        to make navlink does not go over the component
      </div>
      <Container>
        <Card className="work-title works">
          <Card.Body>Projects</Card.Body>
        </Card>
        {worksData.map((work, id) => (
          <Card className="works" key={id}>
            <Row className="work-section">
              <Col lg={6} className="work-img">
                <div className="work-box">
                  <img
                    className="work-image"
                    src={worksImage(work)}
                    alt={work}
                    width="100%"
                    height="100%"
                  />
                </div>
              </Col>
              <Col>
                <Card.Body>{worksText(work)}</Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
        <Card className="work-title works" style={{ marginTop: "100px" }}>
          <Card.Body>Mini Projects</Card.Body>
        </Card>
        <Row>
          {miniWorksData.map((work, id) => (
            <Col lg={4} md={12} key={id}>
              <Card className="works miniworks">
                <Row>
                  <Col lg={12} md={6}>
                    <img
                      className="miniwork-image"
                      src={worksImage(work)}
                      alt={work}
                      width="100%"
                      height="100%"
                    />
                  </Col>
                  <Col>
                    <Card.Text>{worksText(work)}</Card.Text>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
