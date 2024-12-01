import React from "react";
import "./About.css";
import { Col, Container, Image, Row } from "react-bootstrap";

function About() {
  return (
    <>
      <Container id="about" className="about-us">
        <h2 className="heading-title">About Us</h2>
        <hr className="titler-hr " />
        <Row style={{ justifyContent: "space-between" }}>
          <Col lg={5}>
            <p className="about-para">
              "Hi, my name is Siddhant Bhandari. As an experienced Data Engineer currently working as a Database Administrator, I specialize in managing and optimizing database systems to support large-scale data operations. My expertise lies in ensuring the reliability, performance, and security of databases, as well as implementing best practices for data management and infrastructure planning. With a strong background in data engineering, I bring a comprehensive approach to maintaining database health and supporting seamless data workflows."
            </p>
          </Col>
          <Col lg={5} className="my-test">
            <Image className="about-img framed" src="../images/avatar.png" />
            {/* <Image
              id="fot"
              className="about-img framed"
              src="../images/fot.jpg"
            /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
