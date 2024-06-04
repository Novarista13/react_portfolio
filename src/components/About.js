import React from "react";
import reactGirl from "../images/react-girl.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/Skills/SkillsData";
import { skillsImage } from "../data/Skills/SkillsImage";

export default function About() {
  return (
    <>
      <div id="about-section" style={{ margin: "100px", opacity: "0" }}>
        to make navlink does not go over the component
      </div>
      <Container>
        <Row className="about-section">
          <Col lg={5} className=" text-center">
            <img
              width={300}
              src={reactGirl}
              className="about-photo"
              alt="about"
            />
            <div className="skillsContainer">
              <div className="skill--scroll">
                <Marquee
                  gradient={false}
                  speed={60}
                  pauseOnClick={true}
                  delay={0}
                  play={true}
                  direction="left"
                >
                  {skillsData.map((skill, id) => (
                    <div className="skill--box" key={id}>
                      <img
                        className="skill-image"
                        src={skillsImage(skill)}
                        alt={skill}
                        width={50}
                        height={50}
                      />
                      <p>{skill}</p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </Col>
          <Col>
            <Card className="about-text">
              <Card.Body>
                Hello! I'm May Thit Htun, a passionate Front-end React Developer
                based in Yangon, Myanmar.
                <br />
                <br />
                With a strong foundation in JavaScript, React, HTML, and CSS, I
                thrive on creating dynamic and user-friendly web applications.
                I'm currently seeking new opportunities in web development, and
                I'm open to remote work with flexible hours. My goal is to bring
                innovative ideas to life through code and deliver exceptional
                user experiences.
                <br />
                <br />
                Let's connect and explore how we can collaborate to create
                something extraordinary!
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
