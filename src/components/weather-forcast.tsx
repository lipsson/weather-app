import { Grid } from '@mui/material';
import { useGetWeatherForecastQuery } from '../api/queries/use-get-weather-forcast.query';
import { FC } from 'react';
import { LocationType } from 'types/types';
import { Loading } from '../utils/utils';

type DataType = {
    locationData: LocationType
}

export const WeatherForcast: FC<DataType> = (props) => {
    const { locationData } = props;

    const { data: weatherData, isLoading } = useGetWeatherForecastQuery(locationData);

    if (!weatherData || isLoading) {
        return <Loading />
    }

    const handleImg = (icon: string) => {
        return `https://openweathermap.org/img/wn/${icon}@2x.png` || "https://openweathermap.org/img/wn/10d@2x.png";
    }

    return (
        weatherData ? (
            <Grid container>
                <Grid item xs={12}>{`Miejscowość: ${weatherData.name}`}</Grid>
                <Grid item xs={12}>
                    {weatherData.weather.map((w) =>
                        <Grid container alignItems='center' sx={{ width: '100%' }} key={w.id}>
                            <Grid item xs={6}>
                                <img src={handleImg(w.icon)} srcSet={handleImg(w.icon)} alt={w.main} />
                            </Grid>
                            <Grid item xs={6}>
                                {w.description}
                            </Grid>
                        </Grid>
                    )}
                </Grid>
                <Grid item xs={12}>
                    {`Temperatura: ${weatherData.main.temp} °C`}
                </Grid>
            </Grid>
        ) : null
    )
}

