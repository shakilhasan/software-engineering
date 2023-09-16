"use strict";
//https://refactoring.guru/design-patterns/flyweight/typescript/example#example-0--index-ts
class Flyweight {
    sharedState;
    constructor(sharedState) {
        this.sharedState = sharedState;
    }
    operation(uniqueState) {
        const s = JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqueState);
        console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
    }
}
class FlyweightFactory {
    flyweights = {};
    constructor(initialFlyweights) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }
    getFlyweight(sharedState) {
        const key = this.getKey(sharedState);
        if (!(key in this.flyweights)) {
            console.log('FlyweightFactory: Can\'t find a flyweight, creating new one.');
            this.flyweights[key] = new Flyweight(sharedState);
        }
        else
            console.log('FlyweightFactory: Reusing existing flyweight.');
        return this.flyweights[key];
    }
    listFlyweights() {
        const count = Object.keys(this.flyweights).length;
        console.log(`\nFlyweightFactory: I have ${count} flyweights:`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
    getKey(state) {
        return state.join('_');
    }
}
const factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white'],
    // ...
]);
factory.listFlyweights();
function addCarToPoliceDatabase(ff, plates, owner, brand, model, color) {
    console.log('\nClient: Adding a car to database.');
    const flyweight = ff.getFlyweight([brand, model, color]);
    flyweight.operation([plates, owner]);
}
addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');
addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');
factory.listFlyweights();
