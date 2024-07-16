import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherNavComponent } from './weather-nav.component';

describe('WeatherNavComponent', () => {
  let component: WeatherNavComponent;
  let fixture: ComponentFixture<WeatherNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
