import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './service/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    
  }

}
