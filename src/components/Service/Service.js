import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Service.css"

const Service = ({service}) => {
  const {img, title, description, id}=service
  return (
    <Col className="mx-auto ms-3 ms-md-0">
      <Card
        className="h-100 service-cart shadow-lg p-2"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" style={{ height: "230px" }} src={img} />
        <Card.Body>
          <h5 className="mt-3 fst-italic ">{title}</h5>
          <Card.Text className="text-muted">
            {description.slice(0, 70)}...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <NavLink to={`/serviceDetails/${id}`}>
            <button className="hero-btn btn-unfill">Details</button>
          </NavLink>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;