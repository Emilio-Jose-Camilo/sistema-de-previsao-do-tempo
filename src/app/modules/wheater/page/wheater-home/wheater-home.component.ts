import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherDatas } from 'src/app/models/interfaces/weatherDatas';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: []
})
export class WheaterHomeComponent implements OnInit{
  initialCityName = 'São Paulo';
  weatherDatas!: weatherDatas;


  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
      .subscribe({
        next: (response) => {
          response && (this.weatherDatas = response)
          console.log(this.weatherDatas);
        },
        error: (error) => {
          console.log(error)
        }
      })
  }
}
