import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import yt_etl from "../../Assets/Projects/youtube_etl_dashboard.png"
import y_comb from "../../Assets/Projects/y_comb.webp"
import s_rev from "../../Assets/Projects/spec_review.png"
import m_ser from "../../Assets/Projects/milvus_search.png"
import s_mar from "../../Assets/Projects/stock_market.jpeg"
import c_vae from "../../Assets/Projects/vae.gif"
import elt_d from "../../Assets/Projects/ELT_Data_Factory.png"






function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yt_etl}
              isBlog={false}
              title="ETL on YouTube Thumbnails"
              // title="ETL on YouTube Thumbnails for Correlation Between Objects and Viewership Using Machine Learning"
              description="ETL on YouTube metadata and thumbnails to find correlation between objects in image and views of the video using Machine Learning. Used Dagster for workflow orchestration, DBT for transformations, Duckdb for data storage, Streamlit for dashboard and Vision models for object detection"
              ghLink="https://github.com/Anudeep-Kolluri/youtube-dashboard"
              demoLink="https://kolluri-youtube-dashboard.streamlit.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elt_d}
              isBlog={false}
              title="ELT using Azure Data Factory"
              description="Scrape data from site using Azure Virtual Machines, inject the data in an ADLS2 container and then perform transformations using Azure Data Factory. Data Flow mapping and Azure spark pool were used for computations and Tableau for visualizations"
              ghLink="https://github.com/abhi-2699/Data-Factory-Project"
              demoLink="https://public.tableau.com/app/profile/anudeep.kolluri4281/viz/WillRobotsTakeMyJob_com/WillRobotsTakeMyJob"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c_vae}
              isBlog={false}
              title="Face Generation using VAE"
              description="Built a Variational Autoencoder (VAE) from scratch to generate human faces based on CelebA dataset, leveraging a Tkinter GUI for dynamic interaction and visualization. The whole VAE is built on just 2 latent dimensions."
              ghLink="https://github.com/Anudeep-Kolluri/Variational-Autoencoders"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={m_ser}
              isBlog={false}
              title="Semantic Search Engine"
              description="A retrieval engine built using Milvus, designed to efficiently handle large-scale data and enable rapid, accurate searches across vast datasets. It leverages vector similarity search for applications such as recommendation systems, image recognition, and natural language processing."
              ghLink="https://github.com/Anudeep-Kolluri/search-engine-using-milvus"
              demoLink="https://retrieval-engine-milvus.streamlit.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={y_comb}
              isBlog={false}
              title="Analytics on Y Combinator website with Snowflake"
              description="This project automates the scraping, processing, and ingestion of company data from the Y Combinator website into a data warehouse. The scraped data is cleaned and processed using DuckDB, then loaded into Snowflake. Once the data is ingested, dbt (data build tool) performs ELT (Extract, Load, Transform) operations to transform the raw data into analytics-ready tables. The entire data pipeline is orchestrated using Dagster."
              ghLink="https://github.com/Anudeep-Kolluri/automated-company-scraper"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s_rev}
              isBlog={false}
              title="Spec Review"
              description="Given two items, provides an in-depth comparison using the LLM Agents, offering rich, detailed insights that highlight their similarities, differences, and unique features. This is highly beneficial for end users seeking a direct, apple to apple comparison when choosing tech products."
              ghLink="https://github.com/Anudeep-Kolluri/spec-review"
              demoLink="https://spec-review.streamlit.app/"             
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s_mar}
              isBlog={false}
              title="Multi Agent Stock Market Prediction"
              description="Given a stock name, the project produces a detailed report of the stock considering factors like market trend, social media, risk assessment and gives an in depth investment advice."
              ghLink="https://github.com/Anudeep-Kolluri/multi-agent-stock-market-prediction"
              demoLink="https://agentic-stock-market-analysis.streamlit.app/"
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
