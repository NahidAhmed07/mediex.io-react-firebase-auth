import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdSlideshow } from "react-icons/md";
import "./Gallery.css";

const Gallery = () => {
  return (
    <Container className="my-5">
      <h2 className="header-text display-5 fst-italic fw-bold">GALLERY</h2>
      <hr />
      <Row sm={1} md={2} lg={3} xl={3} className="text-start g-4 my-5">
        <Col xs={12} md={6} lg={4}>
          <div className="py-4">
            <h6 className="text-muted">PHOTO GALERY</h6>

            <h2 className="header-text display-6 fw-bold">
              Have A Nice Look Inside Our{" "}
              <span className="text-danger">Medical Care</span>
            </h2>

            <h6>
              <a href="#">View All Gallery</a>
            </h6>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="position-relative">
            <img
              className="img-fluid"
              width="100%"
              src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/gallery-1.jpg"
              alt=""
            />
            <div className="text-overlay">
              <div>
                <MdSlideshow className="icon"></MdSlideshow>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="position-relative">
            <img
              className="img-fluid"
              width="100%"
              style={{height:315}}
              src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/gallery-2.jpg"
              alt=""
            />
            <div className="text-overlay">
              <div>
                <MdSlideshow className="icon"></MdSlideshow>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="position-relative">
            <img
              width="100%"
              className="img-fluid"
              src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/gallery-3.jpg"
              alt=""
            />
            <div className="text-overlay">
              <div>
                <MdSlideshow className="icon"></MdSlideshow>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="position-relative">
            <img
              width="100%"
              className="img-fluid"
              src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/gallery-4.jpg"
              alt=""
            />
            <div className="text-overlay">
              <div>
                <MdSlideshow className="icon"></MdSlideshow>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="position-relative">
            <img
              width="100%"
              className="img-fluid"
              src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/gallery-5.jpg"
              alt=""
            />
            <div className="text-overlay">
              <div>
                <MdSlideshow className="icon"></MdSlideshow>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;