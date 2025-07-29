import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Container className="py-5 container-center">
      <Card className="shadow-lg-soft border-0">
        <Card.Body className="p-5 rounded ">
          <Card.Title className="text-center mb-4">
            <h2 className='text-light'>ℹ️ About WeatherNow</h2>
          </Card.Title>
          <Card.Text className="fs-6">
            <p className='text-dark'>
              <strong>Weather App</strong> is a modern weather application built with:
            </p>
            <ul>
              <li>⚛️ React & Vite</li>
              <li>📡 Axios for real-time API calls</li>
              <li>🎨 React Bootstrap for responsive UI</li>
              <li>🌤️ OpenWeatherMap API</li>
            </ul>
            <p className='text-dark'>
              Features include:
            </p>
            <ul>
              <li>🌍 Search weather by city</li>
              <li>🌡️ Toggle between Celsius and Fahrenheit</li>
              <li>💧 View humidity and weather conditions</li>
              <li>📱 Fully responsive design</li>
            </ul>
          </Card.Text>
          <div className="text-center mt-4">
            <Link to="/" className="btn btn-dark px-4">
              ← Back to Weather
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;