//Models
abstract class FoodItem_1 {
    protected constructor(private name: string) {
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    abstract prepare(): any;
}

class BakedFood_1 extends FoodItem_1 {
    constructor(name: string) {
        super(name);
    }

    prepare() {
        console.log("---> Baking ", this.getName())
    }
}

class FriedFood_1 extends FoodItem_1 {
    constructor(name: string) {
        super(name);
    }

    prepare() {
        console.log("---> Frying ", this.getName())
    }
}

class Juice_1 extends FoodItem_1 {
    constructor(name: string) {
        super(name);
    }

    prepare() {
        console.log("---> Making ", this.getName())
    }
}

//Services
class KitchenService_1 {
    prepareFoods(foodItems_1: FoodItem_1[] = []) {
        foodItems_1.forEach(foodItem => {
            foodItem.prepare();
        })
    }
}

//client code
let foodItems_1 = [new FriedFood_1('Chicken'), new BakedFood_1('Pasta'), new Juice_1('Lemonade'),];
let kitchenService_1 = new KitchenService_1;
kitchenService_1.prepareFoods(foodItems_1);
