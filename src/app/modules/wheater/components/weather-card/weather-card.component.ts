import { Component, Input, OnInit } from '@angular/core';
import { weatherDatas } from 'src/app/models/interfaces/weatherDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit{

  @Input() weatherDatasInput!: weatherDatas;

  constructor() {}

  ngOnInit(): void {
    console.log("Dados recebidos do componente pai!"),
    this.weatherDatasInput;
  }
}

