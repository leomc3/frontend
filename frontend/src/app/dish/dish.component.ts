import { Component, OnInit } from '@angular/core';
import { DishService } from './service/dish.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  constructor(private dishService: DishService) { }

  ngOnInit() {
  }

}
