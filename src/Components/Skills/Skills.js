import React from "react";
import "./Skills.css";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../Cards/Cards";
import sql from "../../images/sql.png";
import python from "../../images/python.png";
import AWS from "../../images/AWS.png";
import etl from "../../images/etl.png";
import Apache_Spark from "../../images/Apache_Spark.png";
import docker from "../../images/docker.png";
import Hadoop from "../../images/Hadoop.png";
import github from "../../images/github.png";
import linux from "../../images/linux.png";  // Add relevant image for Kafka
import cloud from "../../images/cloud.png";    // Add relevant image for Hive
import ssis from "../../images/SSIS.png";  // Add relevant image for Snowflake
import ssms from "../../images/ssms.jpg";  // Add relevant image for Airflow

function Skills() {
  return (
    <>
      <Container className="section-tech-stack">
        <h2 className="heading-title">Tech Stack</h2>
        <hr className="titler-hr " />
        <Row style={{ rowGap: "20px" }}>
          {/* Relevant Tech Stack for Data Engineering */}
          <Col xs={6} lg={2}>
            <Cards title="SQL" img={sql} />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="Python" img={python} />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="AWS" img={AWS} />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="ETL Tools" img={etl} />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="Apache Spark" img={Apache_Spark} />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="Docker" img={docker} />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="Hadoop" img={Hadoop} />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="GitHub" img={github} />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="Linux" img={linux} />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="Cloud" img={cloud} />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="SSIS" img={ssis} />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="SSMS" img={ssms} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Skills;
