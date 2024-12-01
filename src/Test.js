import React from "react";
import "./Testimonials.css";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import Carousels from "../Carousel/Carousels";

function Testimonials() {
  return (
    <>
      <Container className="section-appreciation">
        <h2 className="heading-title">Appreciations</h2>
        <hr className="titler-hr " />
        {/* <Row>
          <Col lg={6} className="appreciation">
            <Image src="../images/appreciation1.png" />
          </Col>
          <Col lg={6} className="appreciation">
            <Image src="../images/appreciation2.png" />
          </Col>
        </Row> */}
        <Row>
          <Col>
            <Carousel className="my-shadow appreciation-carousel">
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation1.png"
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation2.png"
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation2.png"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Testimonials;
