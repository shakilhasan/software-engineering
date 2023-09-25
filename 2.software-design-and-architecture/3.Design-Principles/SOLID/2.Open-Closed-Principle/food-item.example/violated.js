"use strict";
//Models
class FoodItem {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
class BakedFood extends FoodItem {
    constructor(name) {
        super(name);
    }
}
class FriedFood extends FoodItem {
    constructor(name) {
        super(name);
    }
}
class Juice extends FoodItem {
    constructor(name) {
        super(name);
    }
}
//Services
class KitchenService {
    prepareFoods(foodItems = []) {
        foodItems.forEach(foodItem => {
            if (foodItem.constructor.name == 'BakedFood')
                console.log("---> Baking ", foodItem.getName());
            if (foodItem.constructor.name == 'FriedFood')
                console.log("---> Frying ", foodItem.getName());
            if (foodItem.constructor.name == 'Juice')
                console.log("---> Making ", foodItem.getName());
        });
    }
}
//client code
let foodItems = [new FriedFood('Chicken'), new BakedFood('Pasta'), new Juice('Lemonade'),];
let kitchenService = new KitchenService;
kitchenService.prepareFoods(foodItems);
