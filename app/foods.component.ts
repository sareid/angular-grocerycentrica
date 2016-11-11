import { Component, OnInit } 	from '@angular/core';
import { Router }							from '@angular/router';

import { Food } from './food';
import { FoodService } from './food.service';

@Component({
	moduleId: module.id,
  selector: 'my-foods',
  templateUrl: 'foods.component.html'

})
export class FoodsComponent implements OnInit { 
	foods: Food[];

	constructor(
		private router: Router,
		private foodService: FoodService) { }

	getFoods(): void {
		this.foodService.getFoods().then(foods => this.foods = foods);
	}

	ngOnInit(): void {
		this.getFoods();
	}

	add(name: string): void {
		name = name.trim();
		if (!name) { return; }
		this.foodService.create(name)
			.then (food => {
				this.foods.push(food);
			});
	}

	delete(food: Food): void {
		this.foodService
			.delete(food.id)
			.then(() => {
				this.foods = this.foods.filter( f => f !== food);
			})
	}

	toggleFoodPurchased(food) {
		food.purchased = !food.purchased;
  	this.foodService.toggleFoodPurchased(food).then(() => this.getFoods());
  }
}

