import axios from 'axios';

const baseURL = `http://api.openweathermap.org/data/2.5/weather`
const httpClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { httpClient };

