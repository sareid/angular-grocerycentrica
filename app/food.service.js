"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var FoodService = (function () {
    function FoodService(http) {
        this.http = http;
        this.foodsUrl = 'app/foods';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    FoodService.prototype.getFoods = function () {
        return this.http.get(this.foodsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    FoodService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    FoodService.prototype.getFood = function (id) {
        return this.getFoods()
            .then(function (foods) { return foods.find(function (food) { return food.id === id; }); });
    };
    FoodService.prototype.toggleFoodPurchased = function (food) {
        var url = this.foodsUrl + "/" + food.id;
        return this.http
            .put(url, JSON.stringify(food), { headers: this.headers })
            .toPromise()
            .then(function () { return food; })
            .catch(this.handleError);
    };
    FoodService.prototype.create = function (name) {
        return this.http
            .post(this.foodsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    FoodService.prototype.delete = function (id) {
        var url = this.foodsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return FoodService;
}());
FoodService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FoodService);
exports.FoodService = FoodService;
//# sourceMappingURL=food.service.js.map