import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Styles for the animations
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta, skills, services } from "../../content_option";
import "./style.css";

export const About = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000, // Set animation duration
      easing: "ease-in-out", // Set easing function
      once: true, // Ensure the animation only triggers once
    });
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4" data-aos="fade-up">
              About me
            </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp" data-aos="fade-right">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp" data-aos="fade-left">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => (
              <div key={i} data-aos="zoom-in-up" data-aos-delay={i * 200}>
                <h3 className="progress-title">{data.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${data.value}%`,
                    }}
                  >
                    <div className="progress-value"></div>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        <Row className="sec_sp" data-aos="fade-up">
          <Col lg="5">
            <h3 className="color_sec py-4">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => (
              <div className="service_ py-4" key={i} data-aos="fade-up" data-aos-delay={i * 200}>
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc">{data.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
