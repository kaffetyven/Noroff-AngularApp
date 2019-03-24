import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from './../../services/weather-service.service';
import { DogService } from './../../services/dog-service.service';
import { FoxService } from './../../services/fox-service.service';
import { ShibeService } from './../../services/shibe-service.service';
import { CatService } from './../../services/cat-service.service';
import 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [WeatherService, DogService, FoxService, ShibeService, CatService],
  
})
export class DashboardPageComponent implements OnInit {

  public weatherDetail: Array any
  public dogDetail: Array any
  public foxDetail: Array any
  public catDetail: Array any
  public shibeDetail: Array any
  
  

  constructor(protected router: Router, protected weatherService: WeatherService, protected dogService: DogService, protected foxService: FoxService, protected shibeService: ShibeService, protected catService: CatService) {
   }

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }
    this.weatherService.getWeekForecast()    
    .subscribe(
      weather => {
      this.weatherDetail = weather.consolidated_weather;
    });
    this.dogService.getRandomDog()
    .subscribe(
      dog => {
        this.dogService = dog.url;        
      }
    )
    this.foxService.getRandomFox()
    .subscribe(
      fox => {
        this.foxService = fox.image;        
      }
    )
    this.shibeService.getRandomShibe()
    .subscribe(
      shibe => {
        this.shibeService = shibe;        
      }
    )
    this.catService.getRandomCat()
    .subscribe(
      cat => {
        this.catService = cat.text;        
      }
    )

  }
}