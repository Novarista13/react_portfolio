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
    <Container className="app-container" id="work-section">
      <Card className="work-title works">
        <Card.Body>Projects</Card.Body>
      </Card>
      {worksData.map((work, id) => (
        <Card className="works">
          <Row className="work-section">
            <Col className="work-img">
              <div className="work-box" key={id}>
                <img
                  className="work-image"
                  src={worksImage(work)}
                  alt={work}
                  width={500}
                  height={300}
                />
              </div>
            </Col>
            <Col>
              <Card.Body>{worksText(work)}</Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
      <Card className="work-title works" style={{marginTop: "100px"}}>
        <Card.Body>Mini Projects</Card.Body>
      </Card>
      <Row>
        {miniWorksData.map((work, id) => (
          <Col md={4}>
            <Card className="works miniworks" key={id}>
              <img
                className="work-image"
                src={worksImage(work)}
                alt={work}
                width={300}
                height={200}
              />
              <Card.Text>{worksText(work)}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}