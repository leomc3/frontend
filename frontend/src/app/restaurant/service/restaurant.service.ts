import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RestaurantModel } from '../restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: Http) { }
  getRestaurants() {
    return this.http.get('http://localhost:51453/api/Restaurant');
  }

  getRestaurant(id: number) {
    return this.http.get('' + id);
  }

  create(restaurant: RestaurantModel) {
    return this.http.post('', restaurant);
  }
  update(restaurant: RestaurantModel) {
    return this.http.put('' + restaurant.id, restaurant);
  }

  delete(id: number) {
    return this.http.delete('' + id);
  }
}
