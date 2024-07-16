import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-nav',
  standalone: true,
  imports: [],
  templateUrl: './weather-nav.component.html',
  styleUrl: './weather-nav.component.scss',
})
export class WeatherNavComponent {
  @Output() getWeather = new EventEmitter<string>();
  onGetWeather(location: string) {
    this.getWeather.emit(location);
  }
}
