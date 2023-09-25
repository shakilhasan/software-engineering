//Models
abstract class FoodItem {
    protected constructor(private name: string) {
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }
}

class BakedFood extends FoodItem {
    constructor(name: string) {
        super(name);
    }
}

class FriedFood extends FoodItem {
    constructor(name: string) {
        super(name);
    }
}

class Juice extends FoodItem {
    constructor(name: string) {
        super(name);
    }
}

//Services
class KitchenService {
    prepareFoods(foodItems: FoodItem[] = []) {
        foodItems.forEach(foodItem => {
            if (foodItem.constructor.name == 'BakedFood') console.log("---> Baking ", foodItem.getName())
            if (foodItem.constructor.name == 'FriedFood') console.log("---> Frying ", foodItem.getName())
            if (foodItem.constructor.name == 'Juice') console.log("---> Making ", foodItem.getName())
        })
    }
}

//client code
let foodItems = [new FriedFood('Chicken'), new BakedFood('Pasta'), new Juice('Lemonade'),];
let kitchenService = new KitchenService;
kitchenService.prepareFoods(foodItems);
