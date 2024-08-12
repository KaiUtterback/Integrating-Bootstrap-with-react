import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="text-center my-5" style={{ color: '#dc3545' }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Image src="/assets/404-image.jpg" fluid className="mb-4" />
          <h1>404 - Not Found</h1>
          <p>The page you are looking for doesn't exist or an error occurred.</p>
          <Button variant="danger" as={NavLink} to="/" className="mt-3">
            Go Back Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
