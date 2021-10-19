import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Appointment.css"

const Appointment = () => {
  return (
    <Container fluid id="appointment" className="text-start pt-5">
      <Container>
        <Row>
          <Col sm={12} lg={8}>
            <div className="p-1 pt-5 p-md-4 p-lg-5">
              <h6 className="text-white fw-bold">MAKE AN APPOINTMENT</h6>
              <h4 className="fw-bold text-white display-5">
                We Are Trusted The Best Certificate{" "}
                <span className="text-danger">Healthcare.</span>
              </h4>
            </div>
            <Row className="p-1 px-lg-5 pb-4">
              <Col sm={12} md={6}>
                <input
                  type="text"
                  className="form-control input-fields"
                  id="name"
                  placeholder="Your Name *"
                ></input>
              </Col>
              <Col sm={12} md={6}>
                <input
                  type="email"
                  className="form-control input-fields"
                  id="email"
                  placeholder="Your Email *"
                ></input>
              </Col>
              <Col sm={12}>
                <input
                  type="text"
                  className="form-control input-fields"
                  id="name"
                  placeholder="Subfect You Like *"
                ></input>
              </Col>
              <Col sm={12}>
                <textarea
                  className="form-control input-fields"
                  rows="4"
                  placeholder="Write Your message *"
                ></textarea>
              </Col>
              <Col>
                <button className="hero-btn btn-fill ">Send Request</button>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Appointment;