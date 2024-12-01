import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import Typed from "../Typed/Typed";
import Lottie from "lottie-react";
import Siddhant from "./lottie.json";
import pdf from "./siddhantDataEngineer.pdf";

// Define variants for animation
const colVariants = {
  initial: {
    opacity: 0,
    x: -50, // initial x position
  },
  animate: {
    opacity: 1,
    x: 0, // final x position
    transition: {
      duration: 1,
      delay: 0, // optional delay before animation starts
    },
  },
  secondColInitial: {
    opacity: 0,
    x: 50, // initial x position (start from the right)
  },
  secondColAnimate: {
    opacity: 1,
    x: 0, // slide in to the left (final x position)
    transition: {
      duration: 1,
      delay: 0, // optional delay before animation starts
    },
  },
};

function Hero() {
  const firstColControls = useAnimation();
  const secondColControls = useAnimation();

  useEffect(() => {
    // Trigger the animation when the component mounts
    firstColControls.start("animate");
    secondColControls.start("secondColAnimate");
  }, [firstColControls, secondColControls]);

  return (
    <>
      <Container className="section-hero">
        <Row>
          <motion.div
            variants={colVariants}
            initial="initial"
            animate={firstColControls}
            className="HomeText hero-left-image my-flx col-md-6 col-lg-6"
          >
            <h1>Hi Everyone !</h1>
            <h1>
              I'M <b>Siddhant Bhandari</b>
            </h1>
            <Typed />
            <a href={pdf} download="SiddhantDataEngineer">
              <button id="resume-btn">Resume</button>
            </a>
          </motion.div>
          <motion.div
            variants={colVariants} // apply animation variants
            initial="secondColInitial"
            animate={secondColControls} // use controls to trigger animation
            className="hero-right-image my-flx col-md-6 col-lg-6"
          >
            {/* <Image src="../images/code4.png" /> */}
            <Lottie
              className="illustration"
              animationData={Siddhant}
              loop={true}
            />
          </motion.div>
        </Row>
      </Container>
    </>
  );
}

export default Hero;
