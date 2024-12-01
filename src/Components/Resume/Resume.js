import React from "react";
import "./Resume.css";
import { Col, Container, Row } from "react-bootstrap";
import pdf from "../Hero/siddhantDataEngineer.pdf";

function Resume() {
  return (
    <>
      <Container id="resume" className="section-resume">
        <h2 className="heading-title">Resume</h2>
        <hr className="titler-hr " />
        <Row style={{ justifyContent: "space-between" }}>
          <Col xs={12} lg={5} className="inner-resume">
            <h4>Experience</h4>
            <div className="experience-div">
              <div className="resume-title-date">
                <a href="https://huntsjob.com"><h5 id="resume-title">HuntsJob Pvt. Ltd.</h5></a>
                <h5 id="resume-title">( MSSQL DBA )</h5>
                <span>Currently Working..</span>
              </div>
              <p className="resume-para">
                <ul className="my-ul">
                  <li>
                    Migrated 30+ IIS websites and large-scale databases to AWS, leveraging EC2, S3, and RDS for scalable,
                    high-performance architectures.
                  </li>
                  <li>
                    Designed a high-performance MSSQL database and implemented advanced T-SQL stored procedures for efficient
                    ETL workflows and candidate matching for 50M+ records.
                  </li>
                  <li>
                    Automated mass-mailing workflows by optimizing database schema and stored procedures, integrating job
                    recommendation algorithms for tailored user engagement.
                  </li>
                  <li>
                    Architected a scalable credit system with robust data tracking and integrated RBAC for secure user-specific log visibility.
                  </li>
                  <li>
                    Successfully managed and maintained Microsoft SQL Server databases, ensuring high availability, performance optimization, and secure access control for business-critical applications.                  </li>
                  <li>
                    Demonstrated expertise in database backups, recovery strategies, performance tuning, and disaster recovery planning, contributing to seamless operations and data integrity.                  </li>
                </ul>
              </p>
            </div>

            <div className="experience-div" style={{ marginTop: "50px" }}>
              <div className="resume-title-date">
                <a href="https://www.carbon-lens.com/"><h5 id="resume-title">Carbon-Lens </h5></a>
                <h5 id="resume-title">( Freelancing ) </h5>
                <span>Nov 2023 - Jan 2024</span>
              </div>
              <p className="resume-para">
                <ul className="my-ul">
                  <li>
                    Designed and implemented a cost-efficient 2-tier tech stack for production and development, keeping operations
                    within a $120/month budget.
                  </li>
                  <li>
                    Developed automated CI/CD pipelines using GitHub Actions to streamline builds and deployments.
                  </li>
                  <li>
                    Optimized system reliability by configuring a Network Load Balancer (NLB) for efficient traffic distribution.
                  </li>
                </ul>
              </p>
            </div>
            <a href={pdf} download="SiddhantDataEngineer">
              <button id="resume-btn">Resume</button>
            </a>
          </Col>
          <Col xs={12} lg={5} className="inner-resume">
            <h4>Education & Certification</h4>


            <h5>PG DIP in Big Data and Analytics (By C-DAC)</h5>
            <p className="resume-para">
              <ul className="my-ul">
                <p><strong>Grade Achieved:</strong> A</p>
                <p>Successfully completed a 960-hour program that covered:</p>
                <ul>
                  <li>Gained expertise in programming with Python, R, and Java, along with Linux fundamentals and cloud computing concepts.</li>
                  <li>Enhanced skills in advanced statistics, big data tools, data visualization, machine learning, database management, and hands-on project work, complemented by communication training.</li>
                  <li>Advanced statistics and big data tools</li>
                </ul>
                <li>
                  <h6>AWS  Cloud Practitioner </h6>
                  <ul>
                    <li>Learned core cloud concepts, AWS global infrastructure, and key services like EC2, S3, RDS, and Lambda.</li>
                    <li>Gained understanding of IAM, compliance, data protection, AWS pricing models, cost optimization, and cloud architecture best practices.</li>
                  </ul>
                </li>
              </ul>
            </p>

            <div>
              <div style={{ marginTop: "90px" }}>
                <h5>Postgraduate (Mumbai University)</h5>

                <p className="resume-para">
                  <ul className="my-ul">
                    <li>
                      <h6>Master Of Science</h6>
                      <p>
                        Graduation Year : <strong>2019</strong>
                      </p>
                      University : <strong>Mumbai</strong>
                      <p></p>
                      <p>
                        CGPA : <strong>7.7</strong>
                      </p>
                      <p>
                        Location : <strong>Mumbai</strong>
                      </p>
                    </li>
                    <li>
                      <h6>Bachelor of Science </h6>
                      <p>
                        Graduation Year : <strong>2017</strong>
                      </p>
                      University : <strong>Mumbai</strong>
                      <p>
                        CGPA : <strong>8.0</strong>
                      </p>
                      <p>
                        Location : <strong>Mumbai</strong>
                      </p>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Resume;
