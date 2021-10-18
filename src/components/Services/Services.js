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
    <Container className="my-5">
      <h2 className="header-text display-5 fw-bold pt-5">OUR SERVICES</h2>
      <Row xs={1} md={2} lg={3} xl={4} className="py-5 text-start mx-auto g-4">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
