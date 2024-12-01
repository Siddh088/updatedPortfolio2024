import React from "react";
import "./Projects.css";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { BiLogoNetlify } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Carousels from "../Carousel/Carousels";
import { FaShoppingCart } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import rx_site from "../../images/rx-site.png"
import rx2 from "../../images/rx2.png"
import rx_payment from "../../images/rx-payment.png"
import api2 from "../../images/api2.png"
import api3 from "../../images/api3.png"
import api1 from "../../images/api1.png"


function Projects() {
  return (
    <>
      <Container id="project" className="section-projects">
        <h2 className="heading-title">Projects</h2>
        <hr className="titler-hr " />
        <Row className="project-row">
          <Col xs={12} lg={5}>
            <div className="title-icon-flx">
              <p className="project-title">Rx-Ecommerce</p>
              <FaShoppingCart color="#2196F3" fontSize="30px" />
            </div>
            <p className="project-description">
              rx-ecommerce is a react application which demonstrates shoe
              ecommerce application made using react for frotend , Redux For
              State Management To add and delete Products , Firebase For
              Authentication where user data is stored , React-Router For
              navigation , have product validation and EmailJS for sending
              conformation mail have features like Auto detection signin and
              logout Have Coupon service and Wishlist so user can CheckOut Later
            </p>
            <div className="project-icons">
              <div>
                <a href="https://rx-ecommerce.netlify.app/">
                  <BiLogoNetlify
                    className="hover-size"
                    size="30px"
                    color="#2196F3"
                  />
                </a>
                <span>View Live</span>
              </div>
              <div>
                <a href="https://github.com/Siddh088">
                  <FaGithub
                    className="hover-size"
                    size="30px"
                    color="#2196F3"
                  />
                </a>
                <span>View Code</span>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={5} className="test">
            <Carousels
              img1= {rx_site}
              img3= {rx2}
              img2= {rx_payment}
            />
          </Col>

          <Col xs={12} lg={5}>
            <div className="title-icon-flx">
              <p className="project-title">Employee RestFul API</p>
              <FaDatabase color="#5EAC24" fontSize="30px" />
            </div>
            <p className="project-description">
              I Created a robust RESTful API designed to handle JSON responses
              seamlessly across both mobile and web platforms. My project
              focuses on a comprehensive employee management system where data
              is securely stored with password hashing for enhanced security
              measures. Middleware implementation ensures that unauthorized
              users are unable to access sensitive information.Key features
              include account creation functionality with dynamically generated
              unique identifiers dispatched to users for seamless
              authentication.
            </p>
            <div className="project-icons">
              <div>
                <a href="https://github.com/Siddh088">
                  <BiLogoNetlify
                    className="hover-size"
                    size="30px"
                    color="#2196F3"
                  />
                </a>
                <span>View Live</span>
              </div>
              <div>
                <a href="https://github.com/Siddh088">
                  <FaGithub
                    className="hover-size"
                    size="30px"
                    color="#2196F3"
                  />
                </a>
                <span>View Code</span>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={5} className="test">
            <Carousels
              img2 = {api1}
              img1= {api2}
              img3= {api3}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
