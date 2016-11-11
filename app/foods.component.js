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
var router_1 = require("@angular/router");
var food_service_1 = require("./food.service");
var FoodsComponent = (function () {
    function FoodsComponent(router, foodService) {
        this.router = router;
        this.foodService = foodService;
    }
    FoodsComponent.prototype.getFoods = function () {
        var _this = this;
        this.foodService.getFoods().then(function (foods) { return _this.foods = foods; });
    };
    FoodsComponent.prototype.ngOnInit = function () {
        this.getFoods();
    };
    FoodsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.foodService.create(name)
            .then(function (food) {
            _this.foods.push(food);
        });
    };
    FoodsComponent.prototype.delete = function (food) {
        var _this = this;
        this.foodService
            .delete(food.id)
            .then(function () {
            _this.foods = _this.foods.filter(function (f) { return f !== food; });
        });
    };
    FoodsComponent.prototype.toggleFoodPurchased = function (food) {
        var _this = this;
        food.purchased = !food.purchased;
        this.foodService.toggleFoodPurchased(food).then(function () { return _this.getFoods(); });
    };
    return FoodsComponent;
}());
FoodsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-foods',
        templateUrl: 'foods.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        food_service_1.FoodService])
], FoodsComponent);
exports.FoodsComponent = FoodsComponent;
//# sourceMappingURL=foods.component.js.map