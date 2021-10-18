import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
  const { img, name, description, post, id } = doctor;
  return (
    <Col className="mx-auto ms-3 ms-md-0 text-start">
      <Card
        className="h-100 service-cart shadow-lg p-2"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" style={{ height: "250px" }} src={img} />
        <Card.Body>
          <h6 className="mt-3">{name}</h6>
          <p className="fst-italic text-muted fw-bold">{post}</p>
          <Card.Text className="text-muted">
            {description.slice(0, 70)}...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button className="hero-btn btn-unfill">Details</button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Doctor;