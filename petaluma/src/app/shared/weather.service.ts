import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl = `http://api.openweathermap.org/data/2.5/weather?id=5382232&APPID=${environment.weatherKey}&units=imperial`

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get(this.baseUrl);
  }
}
