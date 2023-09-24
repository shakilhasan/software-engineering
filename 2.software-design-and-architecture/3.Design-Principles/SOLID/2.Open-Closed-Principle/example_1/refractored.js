"use strict";
//Models
class FoodItem_1 {
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
class BakedFood_1 extends FoodItem_1 {
    constructor(name) {
        super(name);
    }
    prepare() {
        console.log("---> Baking ", this.getName());
    }
}
class FriedFood_1 extends FoodItem_1 {
    constructor(name) {
        super(name);
    }
    prepare() {
        console.log("---> Frying ", this.getName());
    }
}
class Juice_1 extends FoodItem_1 {
    constructor(name) {
        super(name);
    }
    prepare() {
        console.log("---> Making ", this.getName());
    }
}
//Services
class KitchenService_1 {
    prepareFoods(foodItems_1 = []) {
        foodItems_1.forEach(foodItem => {
            foodItem.prepare();
        });
    }
}
//client code
let foodItems_1 = [new FriedFood_1('Chicken'), new BakedFood_1('Pasta'), new Juice_1('Lemonade'),];
let kitchenService_1 = new KitchenService_1;
kitchenService_1.prepareFoods(foodItems_1);
