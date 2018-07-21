import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DishModel } from '../dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: Http) { }
  getRestaurants() {
    return this.http.get('');
  }

  getPlates() {
    return this.http.get('');
  }
  getPlate(id: number) {
    return this.http.get('' + id);
  }
  create(dish: DishModel) {
    return this.http.post('', dish);
  }
  update(dish: DishModel) {
    return this.http.put('' + dish.id, dish);
  }
  delete(id: number) {
    return this.http.delete('' + id);
  }
}
