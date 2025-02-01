import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure you import AOS CSS for animations
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import "./style.css";

export const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS animations
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3" data-aos="fade-up">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div
              key={i}
              className="po_item"
              data-aos="zoom-in"
              data-aos-delay={`${i * 200}`} // Add a delay for each item to stagger animations
            >
              <img
                src={data.img}
                alt={data.title}
                className="portfolio-img"
                data-aos="fade-in"
              />
              <div className="content">
                <p>{data.description}</p>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
