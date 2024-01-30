import { useState } from 'react';
import './App.css'

import { WeatherForcast } from './components/weather-forcast';
import { LocationType } from 'types/types';
import { Box, Button, Typography } from '@mui/material';

export const App = () => {
  const [userLocation, setUserLocation] = useState<LocationType>(null);
  const hanldeLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lon: longitude });
        },
        (error) => {
          throw new Error(`Bład pobierania: ${error}`);
        }
      );
    }
    else {
      throw new Error('Ta przeglądarka nie obsługuje geolokalizacji.');
    }
  };
  return (
    <Box>
      <Typography variant='h4' sx={{ my: 2 }}>Pogoda</Typography>

      <Button onClick={hanldeLocation}>Uzyj lokalizacji</Button>
      <Box sx={{ m: 2 }}>
        {userLocation ? (
          <WeatherForcast locationData={userLocation} />
        ) : <Box />
        }
      </Box>
    </Box >
  );
}
