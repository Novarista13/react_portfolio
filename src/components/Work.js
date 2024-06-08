import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { miniWorksData, worksData } from "../data/works/WorksData";
import { worksImage } from "../data/works/WorksImage";
import { worksText } from "../data/works/WorksText";
import WorkModal from "./WorkModal";

export default function Work() {
  return (
    <>
      <div id="work-section" style={{ margin: "100px", opacity: "0" }}>
        to make navlink does not go over the component
      </div>
      <Container>
        <Card className="work-title works">
          <Card.Body>Projects</Card.Body>
        </Card>
        <Container>
          <Row>
            {worksData.map((work, id) => (
              <Col lg={6} md={12} key={id}>
                <Row>
                  <Col style={{ margin: "0 auto" }} md={9}>
                    <Card className="works">
                      <div
                        className="work-image-border"
                        style={{
                          border: "3px solid #7eb5eb",
                          borderRadius: "20px",
                        }}
                      >
                        <img
                          className="work-image"
                          src={worksImage(work)}
                          alt={work}
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <WorkModal work={work} />
                    </Card>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
        <Card className="work-title works" style={{ marginTop: "100px" }}>
          <Card.Body>Mini Projects</Card.Body>
        </Card>
        <Row>
          {miniWorksData.map((work, id) => (
            <Col lg={6} md={12} key={id}>
              <Card className="works miniworks">
                <Row>
                  <Col lg={6} md={6} style={{ margin: "0 auto" }}>
                    <img
                      className="miniwork-image"
                      src={worksImage(work)}
                      alt={work}
                      width="100%"
                      height="100%"
                    />
                  </Col>
                  <Col>
                    <Card.Text style={{ margin: "5px auto" }}>
                      {worksText(work)}
                    </Card.Text>
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
