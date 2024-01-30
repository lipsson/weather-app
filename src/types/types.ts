export type LocationType = {
    lat: number;
    lon: number;
} | null;


export type WeatherType = {
    id: number;
    main: string;
    description: string;
    icon: string;
};

type MainType = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
};


export type WeatherDataType = {
    name: string;
    weather: WeatherType[];
    main: MainType;
};