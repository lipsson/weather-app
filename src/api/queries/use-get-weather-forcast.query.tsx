

import { useQuery } from '@tanstack/react-query';
import { httpClient } from '../utils/http-client'
import { LocationType, WeatherDataType } from 'types/types';

export const useGetWeatherForecastQuery = (loc: LocationType) =>
    useQuery<WeatherDataType>({
        queryKey: ['weather-forcast'],
        queryFn: async () => {
            const { data } = await httpClient.get<WeatherDataType>(`?units=metric&lang=pl&appid=${import.meta.env.VITE_SECRET_KEY}&lat=${loc?.lat}&lon=${loc?.lon}`);
            return data;
        }
    });