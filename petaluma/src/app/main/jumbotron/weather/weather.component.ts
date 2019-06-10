import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../shared/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentWeather = {
    imgUrl: `http://openweathermap.org/img/w/02n.png`,
    description: 'CLEAR SKY',
    temperature: '69'
  };

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    // this.weatherService.getWeather().toPromise().then((weatherObj) => {
    //   this.currentWeather.imgUrl = `http://openweathermap.org/img/w/${weatherObj['weather'][0].icon}.png`;
    //   this.currentWeather.description = weatherObj['weather'][0].description.toUpperCase();
    //   this.currentWeather.temperature = Math.floor(weatherObj['main'].temp).toString();
    //   console.log(this.currentWeather);
    // });
  }

}
