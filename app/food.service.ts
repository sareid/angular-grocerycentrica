import { Injectable } 		from '@angular/core';
import { Headers, Http }	from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Food } from './food';

@Injectable()
export class FoodService {

	private foodsUrl = 'app/foods';

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) {}

	getFoods(): Promise<Food[]> {
		return this.http.get(this.foodsUrl)
			.toPromise()
			.then(response => response.json().data as Food[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error );
	}
	
	getFood(id: number): Promise<Food> {
		return this.getFoods()
			.then(foods => foods.find(food => food.id === id));
	}

	toggleFoodPurchased(food: Food): Promise<Food> {
		const url = `${this.foodsUrl}/${food.id}`;
		return this.http
			.put(url, JSON.stringify(food), {headers: this.headers})
			.toPromise()
			.then(() => food)
			.catch(this.handleError);
	}

	create(name: string): Promise<Food> {
		return this.http
			.post(this.foodsUrl, JSON.stringify({name: name}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
		const url = `${this.foodsUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}
}
