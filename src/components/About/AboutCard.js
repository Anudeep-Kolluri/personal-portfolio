import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            As a recent Master's graduate from <span className="purple">University of Texas at Arlington</span>, I am beginning my journey as a <span className="purple">Data Engineer</span> with foundational skills in <span className="purple">Cloud computing</span>, <span className="purple">Big Data</span>, <span className="purple">Data Analytics</span>, and <span className="purple">Machine Learning</span>.
            <br />
            <br />
            My academic and project experiences have equipped me with the knowledge to <span className="purple">design data pipelines</span>, <span className="purple">perform data integration</span>, and <span className="purple">create business intelligence reports</span>. I am adept at addressing fundamental data challenges, contributing to the development of efficient data processing systems, and supporting data-driven decision-making processes.
            <br />
            <br />
            Keen to apply my learning in a practical environment, I am enthusiastic about opportunities that allow me to expand my skills and contribute to impactful data engineering projects in an entry-level role.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Playing Games</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Writing Tech Blogs</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Travelling</span>
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Debug your mindset, compile your strengths, and execute with resilience!"{" "}
          </p>
          <footer className="blockquote-footer">Anudeep Kolluri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
