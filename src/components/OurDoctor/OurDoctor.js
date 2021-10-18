import React, { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
// Import Swiper React components


const OurDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch()
  },[])
  return (
    <Container>
      <hr />
      <h2 className="header-text display-5 fw-bold pt-5">OUR DOCTOR</h2>
      <Row>
        {

        }
      </Row>

    </Container>
  );
};

export default OurDoctor;
