import { Component, Input } from '@angular/core';
import { Weather } from '../../models/weather';
import { weatherCodes } from '../../data/weather.codes';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss',
})
export class WeatherCardComponent {
  @Input() weather: Weather = new Weather();
  @Input() location: string = '';
  weatherCodes: any = weatherCodes;

  formattedTitle(): string {
    const words = this.location.split('_');
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // currentData(): any {
  //   const actualTime = new Date();
}
