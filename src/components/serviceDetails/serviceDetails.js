import React,{useEffect, useState} from 'react';
import { useParams } from "react-router";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import './ServiceDetails.css'

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const history = useHistory();
  
useEffect(() => {
  fetch(
    "https://raw.githubusercontent.com/NahidAhmed07/api/main/assignment-10/services.json"
  )
    .then((res) => res.json())
    .then((data) => {
      const findItem = data.find(service => service.id === serviceId);
      if (findItem) {
        setService(findItem);
      }
    });
  
}, []);
  
  

  return (
    <Container fluid id="service-details" className="pt-5">
      <div className="service-top-banner p-lg-4 pt-5">
        <h2 className="text-start display-4  text-white p-5">Services</h2>
      </div>
      <br />
      <Container className="my-5 text-start">
        <Row className="g-5">
          <Col xs={12} md={6} lg={4}>
            <div>
              <img className="img-fluid" src={service?.img} alt="" />
            </div>
          </Col>

          <Col xs={12} md={6} lg={8}>
            <div>
              <h2 className="mt-4">{service.title}</h2>
              <p className="mt-5 text-muted lh-lg ">{service.description}</p>
              <NavLink to="/appointment">
                <button className="hero-btn btn-fill">Appointment</button>
              </NavLink>
              <button
                // this function for back 1 step 
                onClick={() => history.goBack()}
                className="hero-btn btn-unfill"
              >
                Back Home
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ServiceDetails;