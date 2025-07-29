import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert, InputGroup, Badge, ListGroup, Card } from 'react-bootstrap';
import { fetchWeather } from '../services/weatherService';
import WeatherCard from '../components/WeatherCard';
import { saveFavorite, getFavorites, removeFavorite } from '../utils/favorites';

const Home = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('C');
  const [favorites, setFavorites] = useState([]);

  // Load favorites on mount
  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    try {
      setError('');
      const data = await fetchWeather(city);
      setWeather(data);
      setCity('');
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  const handleSaveFavorite = () => {
    if (weather) {
      saveFavorite(weather.name);
      setFavorites(getFavorites()); // Refresh list
      setError('City saved to favorites!');
      setTimeout(() => setError(''), 3000);
    }
  };

  const loadFavorite = async (favCity) => {
    try {
      setError('');
      const data = await fetchWeather(favCity);
      setWeather(data);
    } catch (err) {
      setError(`Could not load weather for ${favCity}`);
    }
  };

  const handleRemoveFavorite = (favCity) => {
    removeFavorite(favCity);
    setFavorites(getFavorites());
  };

  return (
    <Container className="py-5 container-center">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-primary mb-3">🌤️ WeatherNow</h1>
        <p className="lead text-dark">Search and save your favorite city weather.</p>
      </div>

      <Form onSubmit={handleSearch} className="mb-5">
        <InputGroup className="mb-3 shadow-sm">
          <Form.Control
            type="text"
            placeholder="Enter city name (e.g., Kolkata,Pune,Ranchi)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border-0 py-3"
          />
          <Button type="submit" variant="dark" className="px-4">
            🔍 Search
          </Button>
        </InputGroup>

        <div className="text-center mb-4">
          <Button
            variant={unit === 'C' ? 'dark' : 'outline-dark'}
            size="sm"
            onClick={() => setUnit('C')}
            className="me-2 px-3"
          >
            °C
          </Button>
          <Button
            variant={unit === 'F' ? 'dark' : 'outline-dark'}
            size="sm"
            onClick={() => setUnit('F')}
            className="px-3"
          >
            °F
          </Button>
        </div>
      </Form>


      {error && (
        <Alert
          variant={weather ? 'success' : 'danger'}
          className="text-center rounded-3"
          onClose={() => setError('')}
          dismissible
        >
          {error}
        </Alert>
      )}

      {weather && <WeatherCard weather={weather} unit={unit} />}

      {weather && (
        <div className="text-center mt-3">
          <Button variant="outline-light" size="sm" onClick={handleSaveFavorite}>
            ❤️ Save to Favorites
          </Button>
        </div>
      )}

     
      {favorites.length > 0 && (
        <Card className="mt-5 shadow-sm border-0">
          <Card.Header className="bg-white d-flex justify-content-between align-items-center">
            <h5 className="mb-0">⭐ Your Favorite Cities</h5>
          </Card.Header>
          <ListGroup variant="flush">
            {favorites.map((fav, idx) => (
              <ListGroup.Item
                key={idx}
                className="d-flex justify-content-between align-items-center"
              >
                <Button
                  variant="link"
                  className="p-0 text-dark fw-bold"
                  onClick={() => loadFavorite(fav)}
                  style={{ textDecoration: 'none' }}
                >
                  {fav}
                </Button>
                <Badge
                  bg="danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleRemoveFavorite(fav)}
                >
                  ×
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      )}
    </Container>
  );
};

export default Home;