import React, { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Doctor from "../Home/Doctor/Doctor";
// Import Swiper React components


const OurDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NahidAhmed07/api/main/assignment-10/doctor.json"
    ).then(res => res.json())
      .then(data => setDoctors(data));
  }, [])
  
  return (
    <Container>
      
      <h2 className="header-text display-5 fst-italic fw-bold pt-5">OUR DOCTOR</h2><hr />
      <Row className="py-5">
        {
          doctors.map(doctor => <Doctor
            key={doctor.id}
            doctor={doctor}
          ></Doctor>)
        }
      </Row>

    </Container>
  );
};

export default OurDoctor;
