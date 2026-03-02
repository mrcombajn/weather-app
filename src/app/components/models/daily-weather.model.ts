// 
export interface DailyForecast {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: CurrentWeather;
    minutely: Minutely[];
    hourly: Hourly[];
    daily: Daily[];
    alerts: Alert[];    
}

export interface CurrentWeather {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    rain?: Precipitation;
    snow?: Precipitation;
    weather: Weather[];
}

export interface Precipitation {
    '1h?': number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Minutely {
    dt: number;
    precipitation: number;
}

export interface Hourly {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
    pop: number;
}

export interface Daily {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    summary: string;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    himidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather;
    clouds: number;
    pop: number;
    rain: number;
    uvi: number;
}

export interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

export interface FeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

export interface Alert {
    sender_name: string;
    event: string;
    start: number;
    end: number;
    description: string;
}