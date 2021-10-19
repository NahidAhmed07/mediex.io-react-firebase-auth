import React from "react";
import "./Quote.css";
import { Col, Container, Row } from "react-bootstrap";

const Quote = () => {
  return (
    <Container fluid className="quote">
      <Container>
        <Row>
          {/* quote section  */}
          <Col sm={12} lg={10} xl={9} className="mx-auto py-5">
            <div className="py-5">
              <h6 className="mb-3">GET A QUOTE</h6>
              <h2 className="display-4 fw-bold">
                Looking For Professional &amp; Trusted Medical &amp; Health Care
                ?
              </h2>
              <h5 className="fst-italic mt-4">
                Don't Hesitate To Contact With Us
              </h5>

              <button className="hero-btn btn-fill mt-5">Get Quote</button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Quote;
