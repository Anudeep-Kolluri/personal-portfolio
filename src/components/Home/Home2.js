import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaKaggle } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A result-oriented, self-motivated recent Master's graduate with a strong academic foundation in <b className="purple">Data Engineering</b>, <b className="purple">Data Analysis</b>, <b className="purple">Generative AI</b>, and <b className="purple">Database Administration</b>. 
              <br />
              <br />
              Instead of listing my skills, let me share a quick story about them:
              <br />
              <br />
              Imagine designing a <b className="purple">data pipeline</b> that seamlessly extracts, transforms, and loads terabytes of information while optimizing every query for blazing-fast results. Envision creating <b className="purple">data warehouses</b> and <b className="purple">schemas</b> that organize chaos into clarity, powering decision-making. Picture building intuitive <b className="purple">data visualizations</b> and reports that bring insights to life, or crafting <b className="purple">Generative AI models</b> that redefine what's possible. 
              <br />
              <br />
              From automating deployments to fine-tuning performance, every skill in my toolkit serves a purpose: transforming raw data into impactful solutions.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar" style={{ marginTop: "60px" }}>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Anudeep-Kolluri"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kolluri-anudeep/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.kaggle.com/anudeepkolluri"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaKaggle/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
