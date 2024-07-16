import { Weather } from '../models/weather';

export class WeatherApi {
  static async getWeather(
    latitude: number,
    longitude: number
  ): Promise<Weather> {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,rain,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );

    const data = await response.json();
    debugger;
    return data;
  }
}
