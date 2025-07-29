import React from 'react';
import { Card, Badge, Row, Col } from 'react-bootstrap';

const WeatherCard = ({ weather, unit }) => {
  const temp = unit === 'C'
    ? Math.round(weather.main.temp)
    : Math.round((weather.main.temp * 9) / 5 + 32);

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <Card className="weather-card shadow-lg-soft text-center border-0">
      <Card.Body className="card-body p-4">
        <h2 className="mb-1 fw-bold">{weather.name}</h2>
        <p className="text-muted mb-3">{weather.sys.country}</p>

        <div className="d-flex justify-content-center align-items-center mb-3">
          <img src={iconUrl} alt="weather icon" className="me-3" />
          <h1 className="display-4 mb-0">{temp}°{unit}</h1>
        </div>

        <Badge bg="info" text="dark" pill className="px-3 py-2 mb-3 fs-5">
          {weather.weather[0].main}
        </Badge>

        <Row className="mt-4 text-center g-2">
          <Col xs={6}>
            <div className="p-3 bg-dark rounded">
              <small className="text-light">Humidity</small>
              <div className="fw-bold">{weather.main.humidity}%</div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="p-3 bg-dark rounded">
              <small className="text-light">Feels Like</small>
              <div className="fw-bold">
                {unit === 'C'
                  ? Math.round(weather.main.feels_like)
                  : Math.round((weather.main.feels_like * 9) / 5 + 32)}°{unit}
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;