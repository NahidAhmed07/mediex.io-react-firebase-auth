import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import './Footer.css';
import { NavLink } from "react-router-dom"
import {FaRegCalendarAlt} from "react-icons/fa"

const Footer = () => {
  return (
    <Container fluid className="footer py-5 text-start">
      <Container>
        <Row xs={1} md={2} lg={3} className="g-5">
          <Col>
            <h5>Useful Link</h5>
            <hr />
            <br />
            <ul className="useful-links">
              <li as={NavLink} to="/home">
                &#62; Main Home
              </li>
              <li as={NavLink} to="/">
                &#62; Setting &amp; Privacy
              </li>
              <li as={NavLink} to="/">
                &#62; Make Appointment
              </li>
              <li as={NavLink} to="/">
                &#62; Faq
              </li>
              <li as={NavLink} to="/">
                &#62; About us
              </li>
              <li as={NavLink} to="/">
                &#62; Latest News
              </li>
              <li as={NavLink} to="/">
                &#62; Contact us
              </li>
              <li as={NavLink} to="/">
                &#62; Doctors Details
              </li>
              <li as={NavLink} to="/">
                &#62; Careers
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Recent Post</h5>
            <hr />
            <br />
            <div>
              <div className="d-flex gap-4 align-items-center post-item">
                <img
                  className="circle-img"
                  src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/blog-list-1-150x150.jpg"
                  alt=""
                />
                <div>
                  <h6 className="fw-bold">How About Fall Cleaning?</h6>
                  <p>
                    {" "}
                    <FaRegCalendarAlt className="me-3" />
                    April 05, 2020
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4 align-items-center my-4 post-item">
                <img
                  className="circle-img"
                  src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/blog-list-5-150x150.jpg"
                  alt=""
                />
                <div>
                  <h6 className="fw-bold">Four Ways a Clean</h6>
                  <p>
                    {" "}
                    <FaRegCalendarAlt className="me-3" />
                    April 02, 2020
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4 align-items-center post-item ">
                <img
                  className="circle-img"
                  src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/blog-list-4-150x150.jpg"
                  alt=""
                />
                <div>
                  <h6 className="fw-bold">Time For Spring Cleaning ?</h6>
                  <p>
                    {" "}
                    <FaRegCalendarAlt className="me-3" />
                    April 22, 2021
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <h5>Photo Gallery</h5>
            <hr />
            <br />

            <div>
              <img
                src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/portfolio-2-150x150.jpg"
                alt=""
              />
              <img
                src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/portfolio-1-150x150.jpg"
                alt=""
              />
              <img
                src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/portfolio-3-150x150.jpg"
                alt=""
              />
              <img
                src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/portfolio-4-150x150.jpg"
                alt=""
              />
              <img
                src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/portfolio-8-150x150.jpg"
                alt=""
              />
              <img
                src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/portfolio-6-150x150.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;