import React, { useEffect, useState } from "react";
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
    <Container className="my-5">
      <h2 className="header-text display-6 fw-bold pt-5">
        OUR DOCTOR
      </h2><br />
      <p className="text-muted lead fst-italic">
        Our doctors are specialized in their field and have more than 10 years
        of experiences.
      </p><br />
      <hr />
      {/* doctor array map for creating single doctor cart  */}
      <Row className="py-5 g-4">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </Row>
    </Container>
  );
};

export default OurDoctor;
