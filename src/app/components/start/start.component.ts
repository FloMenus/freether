import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent {
  @Output() getWeather = new EventEmitter<string>();
  onGetWeather(location: string) {
    this.getWeather.emit(location);
  }
}
