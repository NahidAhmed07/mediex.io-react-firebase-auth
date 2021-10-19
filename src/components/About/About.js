import React, { useEffect, useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./About.css";
import { MdSlideshow } from "react-icons/md";
import { useHistory } from "react-router";
import Quote from "../Home/Quote/Quote";


const About = () => {
  const [doctors, setDoctors] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NahidAhmed07/api/main/assignment-10/doctor.json"
    )
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <Container fluid id="about" className="">
      <div className="about pt-5 text-white">
        <div>
          <h1 className="display-3 fw-bold">About Us</h1>
          <h5>Home &gt; About Us</h5>
        </div>
      </div>
      <Container>
        <Row className="my-5 text-start">
          <Col sm={12} md={6}>
            <h6 className="text-muted">WELCOME TO MEDICHECK.</h6>
            <h3 className="fw-bold">
              We Are Trusted The Best Certificate{" "}
              <span className="text-danger">Healthcare.</span>
            </h3>
          </Col>

          <Col sm={12} md={6}>
            <p className="text-muted">
              Avoids pleasure itself, because it is pleasure, but because those
              who do not know how to pursue pleasure rational count consequences
              that are extremely painful again is there anyone who loves
            </p>
          </Col>
        </Row>

        <Row className="my-5 g-2 g-md-4 g-lg-5 text-start">
          <Col sm={12} md={6}>
            <div className="overflow-hidden position-relative">
              <img
                className="img-fluid about-img1"
                src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/home-3-who-we-are-bg.jpg"
                alt=""
              />
              <div className="text-overlay">
                <div>
                  <MdSlideshow className="icon"></MdSlideshow>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={5}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div>
                <h3 className="fw-bold">
                  Discover Our Medical Service Institution
                </h3>
                <p className="text-muted my-4">
                  We denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by charms pleasure
                </p>
                <button className="hero-btn btn-fill mt-4">Learn More</button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="g-5 my-5">
          <h6 className="text-muted fw-bold mt-4">OUR PROFESSOR</h6>
          <h3 className="my-4">
            We Have A Team Of{" "}
            <span className="text-danger">Expert Professor.</span>
          </h3>{" "}
          <hr />
          {doctors.map((doctor) => (
            <Col sm={12} md={6} lg={4}>
              <div
                onClick={() =>
                  history.push(`/doctorDetails/${doctor.id}#doctor-details`)
                }
                className="d-flex gap-4 align-items-center doctor-item post-item"
              >
                <img className="circle-img" src={doctor.img} alt="" />
                <div>
                  <h6 className="fw-bold">{doctor.name}</h6>
                  <p className="text-muted fw-bold text-start">{doctor.post}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Quote></Quote>

      <Container className="my-5 text-start">
        <Row className="g-4">
          <Col sm={4}>
            {/* About Image  */}
            <img
              className="img-fluid"
              src="http://themetechmount.com/html/delmont/images/single-img-four.png"
              alt=""
            />
          </Col>
          <Col sm={8}>
            <h6 className="text-muted fw-bold">WHAT WE DO</h6>
            <h3 className="about-head text-bold mb-4">
              We Have 25 Years <span className="text-danger">Experience.</span>
            </h3>
            <h6 className="about-head text-muted">
              We offer extensive medical procedures to outbound and inbound
              patients what it is and we are very proud of achievement of our
              stpatients for recovery
            </h6>
            <br />

            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  <h6>our Mission</h6>{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col sm={4}>
                      <img
                        src="http://themetechmount.com/html/delmont/images/portfolio/post-one-1200x800.jpg"
                        width="150px"
                        alt=""
                      />
                    </Col>
                    <Col sm={8}>
                      <p className="text-muted">
                        Our Clinic has grown to provide a world class facility
                        for the treatment of tooth loss, dental cosmetics and
                        bore advanced restorative dentistry. We are among the
                        most qualified implant providers in the AUS with over 30
                        years of quality training and experience.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {" "}
                  <h6>Our Stratagies</h6>{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col sm={4}>
                      <img
                        src="http://themetechmount.com/html/delmont/images/portfolio/post-one-1200x800.jpg"
                        width="150px"
                        alt=""
                      />
                    </Col>
                    <Col sm={8}>
                      <p className="text-muted">
                        Our Clinic has grown to provide a world class facility
                        for the treatment of tooth loss, dental cosmetics and
                        bore advanced restorative dentistry. We are among the
                        most qualified implant providers in the AUS with over 30
                        years of quality training and experience.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  {" "}
                  <h6>Our Vision</h6>{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col sm={4}>
                      <img
                        src="http://themetechmount.com/html/delmont/images/portfolio/post-two-1200x800.jpg"
                        width="150px"
                        alt=""
                      />
                    </Col>
                    <Col sm={8}>
                      <p className="text-muted">
                        Our Clinic has grown to provide a world class facility
                        for the treatment of tooth loss, dental cosmetics and
                        bore advanced restorative dentistry. We are among the
                        most qualified implant providers in the AUS with over 30
                        years of quality training and experience.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
