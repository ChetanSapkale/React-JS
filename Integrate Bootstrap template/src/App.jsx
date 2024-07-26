import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import './Banner.css';

const Banner = () => {
  return (
    <>
      <Container fluid className="banner-container">
        <Row className="w-100">
          <Col md={7} className="d-flex flex-column justify-content-center text-md-left mb-4 mb-md-0">
            <h1 className="pb-3 banner-title">Hi, I'm John Deo.</h1>
            <p className="banner-text">A freelance Web developer from London. <br /> I convert custom web designs to bootstrap templates.</p>
            <p className="pb-4 banner-text">I make YouTube videos and write Blogs.</p>
            <div className="w-50">
              <Button className="mt-3 banner-button">I'M AVAILABLE</Button>
            </div>
            <div className="social-icons mt-3">
              <i className='bi bi-facebook mx-2'></i>
              <i className="bi bi-twitter mx-2"></i>
              <i className="bi bi-github mx-2"></i>
              <i className="bi bi-linkedin mx-2"></i>
            </div>
          </Col>
          <Col md={5} className="d-flex justify-content-center">
            <img src="https://bootstraplily.com/demo/detto-ui-kit/img/portrait-photo.png" alt="John Deo" className="img-fluid col-11 banner-image"/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Banner;
