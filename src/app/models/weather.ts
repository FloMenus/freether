export class Weather {
  latitude = 0;
  longitude = 0;
  generationtime_ms = 0;
  utc_offset_seconds = 0;
  timezone = '';
  timezone_abbreviation = '';
  elevation = 0;
  current_units = {
    time: '',
    interval: '',
    temperature_2m: '',
    rain: '',
    relative_humidity_2m: '',
    wind_speed_10m: '',
    weather_code: '',
  };
  current = {
    time: '',
    interval: 0,
    temperature_2m: 0,
    rain: 0,
    relative_humidity_2m: 0,
    wind_speed_10m: 0,
    weather_code: 0,
  };

  constructor() {}
}
