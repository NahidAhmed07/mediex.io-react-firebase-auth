import React from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import "./NotFound.css";

const NotFound = () => {
  const history = useHistory();
  return (
    <Container fluid className="page404" id="not-found">
      <button
        onClick={() => history.push("/home#home")}
        className="btn btn-warning"
      >
        Back To Home
      </button>
    </Container>
  );
};

export default NotFound;
<h1>page not fount</h1>;
