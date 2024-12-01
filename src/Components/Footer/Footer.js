import React from "react";
import "./Footer.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

function Footer() {
  return (
    <>
      <Container id="contact" className="section-footer">
        <Row>
          <Col xs={12} lg={6}>
            <h2 className="heading-title">Let's Connect</h2>
            <hr className="titler-hr " />
          </Col>
          <Col xs={12} lg={6}>
            <div className="footer-ic">
              <a href="https://github.com/Siddh088" target="_self">
                <FaGithub className="f-ic git-ic" />
              </a>
              <a href="https://www.linkedin.com/in/i-am-siddhant" target="_self">
                <FaLinkedin className="f-ic link-ic" />
              </a>
              <a href="https://www.linkedin.com/in/i-am-siddhant">
                <FaXTwitter className="f-ic twit-ic" />
              </a>
              <a href="https://github.com/siddh088" target="_self">
                <FaDiscord className="f-ic dis-ic" />
              </a>
              <a href="https://www.instagram.com/#/" target="_self">
                <IoLogoInstagram className="f-ic inst-ic" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
