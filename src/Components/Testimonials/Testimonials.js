import React, { useState } from "react";
import "./Testimonials.css";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import Carousels from "../Carousel/Carousels";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css"; // Import the lightbox CSS
import CDAC from "../../images/CDAC.jpg"
import CDAC_Performance_Certificate from "../../images/CDAC_Performance_Certificate.jpg"


function Testimonials() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // const images = [
  //   "../images/CDAC.jpg",
  //   "../images/CDAC_Performance_Certificate.jpg",
  // ];

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  return (
    <>
      <Container className="section-appreciation">
        <h2 className="heading-title">Appreciations & Certifications</h2>
        <hr className="titler-hr " />

        <Row style={{ justifyContent: "space-between" }}>
          {isOpen && (
            <Lightbox
              image={selectedImage}
              onClose={() => setIsOpen(false)}
            />
          )}
          <Col xs={12} lg={5}>
            <Carousel className="my-shadow appreciation-carousel" style={{cursor:"pointer"}}>
            <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src= {CDAC}
                  onClick={() => handleImageClick({CDAC})}
                />
              </Carousel.Item>
             
            </Carousel>
          </Col>
          <Col xs={12} lg={5}>
            <Carousel className="my-shadow appreciation-carousel" style={{cursor:"pointer"}}>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src={CDAC_Performance_Certificate}
                  onClick={() => handleImageClick({CDAC_Performance_Certificate})}
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
