import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Weather } from './models/weather';
import { WeatherService } from './service/weather.service';
import { CommonModule } from '@angular/common';

// Components
import { StartComponent } from './components/start/start.component';
import { WeatherComponent } from './components/weather/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, StartComponent, WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  weather: Weather;
  location: string;

  constructor(private weatherService: WeatherService) {
    this.location = '';
    this.weather = new Weather();
  }

  async getWeather(location: string) {
    this.weatherService.getWeather(location).subscribe((data: Weather) => {
      this.weather = data;
      this.location = location;
    });
  }
}
