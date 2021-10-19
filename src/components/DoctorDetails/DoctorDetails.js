import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../ServiceDetails/ServiceDetails.css";

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState({});
  const history = useHistory();


  console.log(doctorId);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NahidAhmed07/api/main/assignment-10/doctor.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const findItem = data.find((doctor) => doctor.id === doctorId);
        if (findItem) {
          setDoctor(findItem);
        }
      });
  }, []);


  return (
    <Container fluid id="doctor-details" className="pt-5">
      <div className="service-top-banner p-lg-4 pt-5">
        <h2 className="text-start display-4  text-white p-5">Doctors</h2>
      </div>
      <br />
      <Container className="my-5 text-start">
        <Row className="g-5">
          <Col xs={12} md={6} lg={4}>
            <div>
              <img className="img-fluid" src={doctor?.img} alt="" />
            </div>
          </Col>

          <Col xs={12} md={6} lg={8}>
            <div>
              <h2 className="mt-4">{doctor?.name}</h2>
              <p className="fst-italic text-muted fw-bold">{doctor?.post}</p>

              <p className="mt-3 text-muted lh-lg ">{doctor?.descrip}</p>
              <p className="text-muted ">
                <i className="far fa-envelope-open me-2"></i>
                {doctor.email}
              </p>
              <p className="text-muted ">
                <i className="fas fa-phone-alt me-2"></i>
                {doctor.phone}
              </p>
              <NavLink to="/appointment">
                <button className="hero-btn btn-fill">Appointment</button>
              </NavLink>
              <button
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

export default DoctorDetails;
