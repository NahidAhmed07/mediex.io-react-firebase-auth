import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AiOutlineGold, AiOutlineInsertRowBelow } from "react-icons/ai";
import { SiSmartthings } from "react-icons/si";
import "./Pricing.css"


const Pricing = () => {
  return (
    <Container fluid>
      <Container className="my-5">
        <h6 className="text-muted mb-4 fw-bold">PRICING PLAN</h6>
        <h2 className="display-6 fw-bold">
          Best Pricing Plan For All Kinds Of{" "}
          <span className="text-danger"> People</span>
        </h2>
        <hr />

        <Row xs={1} md={2} lg={3} className="my-5 g-4">
          <Col>
            <Card className="shadow-lg" style={{ width: "18rem" }}>
              <Card.Title className="pricing-head">
                <h5>GOLD PLAN</h5>
              </Card.Title>
              <AiOutlineGold className="price-icon"></AiOutlineGold>
              <Card.Body>
                <Card.Text>
                  <h2 className="price">$05.99</h2>
                  <p className="text-muted my-4">
                    We denounce with righteous indig nation and dislike men we
                    beguiled and demoralize by the charms of pleasure of the
                    moment
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="pricing-foot">
                <h5>Choose Plan</h5>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Title className="pricing-head">
                <h5>SMART PLAN</h5>
              </Card.Title>
              <SiSmartthings className="price-icon"></SiSmartthings>
              <Card.Body>
                <Card.Text>
                  <h2 className="price">$95.99</h2>
                  <p className="text-muted my-4">
                    To take a trivial example, which of us ever undertakes
                    laborious physoes ical exercise, except to obtain some
                    advantage from it who
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="pricing-foot">
                <h5>Choose Plan</h5>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Title className="pricing-head">
                <h5>BASIC PLAN</h5>
              </Card.Title>
              <AiOutlineInsertRowBelow className="price-icon"></AiOutlineInsertRowBelow>
              <Card.Body>
                <Card.Text>
                  <h2 className="price">$25.99</h2>
                  <p className="text-muted my-4">
                    There anyone who loves pursues or desires to obtain pain of
                    because it is pain, but because occasionally circumstan
                    occur whic
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="pricing-foot">
                <h5>Choose Plan</h5>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Pricing;