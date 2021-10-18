import React from 'react';
import "./Hero.css"
import useCounter from "../../../hooks/useCounter";
import { imageArray } from '../../../utilities/utilities';
import { Col, Container, Row } from 'react-bootstrap';
// import {} 

const Hero = () => {
  const [counter] = useCounter(0, imageArray.length);
  
  const heroBannerStyle = {
    backgroundImage: `url(${imageArray[counter]})`,
    transition: "all 1.5s ease",
  };


  return (
    <div
      className="hero-banner container-fluid text-white"
      style={heroBannerStyle}
    >
      <Container className="h-100">
        <Row className="h-100">
          <Col xs={12} md="10"  className="mx-auto h-100">
            <div className="h-100 d-flex flex-column justify-content-center align-align-items-center hero-text">
              <h2 className="display-4">
                We Believe Everyone Should Have Easy Access To Great Dental Care
              </h2>
              <p className="d-none d-md-block">
                As a leading industry innovator, Mediex is opening up exciting
                new opportunities for dental professionals, investors, employees
                &amp; suppliers. Contact us to find out what we have to
              </p>
              <br />
              <div>
                <button className="hero-btn btn-fill mb-3 mb-md-0">GET STARTED</button>
                <button className="hero-btn btn-unfill">CONTACT</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
  
};

export default Hero;