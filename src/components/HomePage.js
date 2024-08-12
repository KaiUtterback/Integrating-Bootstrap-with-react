import React from 'react';
import { Button, Container, Card, Image } from 'react-bootstrap';
import welcomeImage from '../assets/welcome-image.jpg';
import './HomePage.css';

const HomePage = () => {
  return (
    <Container className="homepage-container text-center">
      <Image src={welcomeImage} fluid className="welcome-image mb-4" alt="Welcome" />
      <h1 className="display-4">Welcome to Our Shop</h1>
      <p className="lead">Discover the best deals and latest trends!</p>
      <Button variant="primary" size="lg" className="cta-button shadow-lg">
        Shop Now
      </Button>
      <Card className="featured-product shadow">
        <Card.Body>
          <Card.Title className="text-primary">Featured Product</Card.Title>
          <Card.Text>
            Check out our latest arrivals and enjoy exclusive deals!
          </Card.Text>
          <Button variant="outline-primary">View Products</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HomePage;
