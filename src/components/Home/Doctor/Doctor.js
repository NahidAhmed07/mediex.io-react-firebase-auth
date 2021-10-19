import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Doctor = ({ doctor }) => {
  const { img, name, description, post, id } = doctor;
  return (
    <Col className="mx-auto ms-3 ms-md-0 text-start">
      <Card
        className="h-100 service-cart shadow-lg p-2"
        style={{ width: "18rem" }}
      >
        <div className='overflow-hidden'>
          <Card.Img className="animate-img" variant="top" style={{ height: "250px" }} src={img} />
        </div>
        <Card.Body>
          <h6 className="mt-3">{name}</h6>
          <p className="fst-italic text-muted fw-bold">{post}</p>
          <Card.Text className="text-muted">
            {description.slice(0, 70)}...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <HashLink to={`/doctorDetails/${id}#doctor-details`}>
            <button className="hero-btn btn-unfill">Details</button>
          </HashLink>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Doctor;