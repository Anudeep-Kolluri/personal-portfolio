import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMysql,
  SiPython,
  SiAmazonaws,
  SiApachespark,
  SiApacheairflow,
  SiDbt,
  SiSnowflake,
  SiApachehadoop,
  SiGnubash,
  SiTerraform,
  SiDocker,
  SiKubernetes,
  SiPandas,
  SiNumpy,
  SiGit,
  SiTableau,
  SiPowerbi,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiR
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDbt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSnowflake />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachehadoop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR />
      </Col>
    </Row>
  );
}

export default Techstack;
