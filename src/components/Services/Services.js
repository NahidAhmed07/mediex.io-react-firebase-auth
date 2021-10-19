import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/NahidAhmed07/api/main/assignment-10/services.json"
    ).then(res => res.json())
      .then(data => setServices(data));
  }, [])
  
  return (
    <Container fluid id="service" className="pt-5">
      <Container className="my-5">
        <h2 className="header-text display-6  fw-bold pt-5">OUR SERVICES</h2>
        <br />
        <p className="fst-italic text-muted">
          We are always keen on supporting art production and digital services
          to provide the customers with added value that{" "}
        </p><br />
        <hr />
        <Row
          className="py-5 text-start mx-auto g-4"
        >
          {services.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Services;
