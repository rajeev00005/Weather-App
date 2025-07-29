import axios from 'axios';

const API_KEY = 'e431a3b0d4b9bc0f305edb6454db1681';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'City not found');
  }
};