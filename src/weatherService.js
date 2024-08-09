import axios from 'axios';

const API_KEY = '1635890035cbba097fd5c26c8ea672a1';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });
    const filteredData = response.data.list.filter((item, index) => index % 8 === 0);
    return filteredData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return [];
  }
};

