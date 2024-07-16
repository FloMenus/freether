import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const LocationData = require('../data/locations.data.json');

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(location: string): Observable<any> {
    const latitude = LocationData[location].latitude;
    const longitude = LocationData[location].longitude;
    const response = this.http.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,rain,relative_humidity_2m,wind_speed_10m,weather_code`
    );

    return response;
  }
}
