import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Weather } from '../../models/weather';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
import { WeatherNavComponent } from '../weather-nav/weather-nav.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [WeatherCardComponent, WeatherNavComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  @Input() weather: Weather = new Weather();
  @Input() location: string = '';

  @Output() getWeather = new EventEmitter<string>();
  onGetWeather(location: string) {
    this.getWeather.emit(location);
  }
}
