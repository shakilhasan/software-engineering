"use strict";
// TODO: I think, this example is not proper implementation
//https://medium.com/@cristianalemanfuentes/abstract-factory-in-typescript-gof-design-pattern-e8f661e49071
var Car;
(function (Car) {
    Car[Car["HONDA"] = 0] = "HONDA";
    Car[Car["MAZDA"] = 1] = "MAZDA";
})(Car || (Car = {}));
class CarPart {
    static getFactory(key) {
        const hondaFactory = new HondaFactory();
        const mazdaFactory = new MazdaFactory();
        switch (key) {
            case Car.HONDA:
                return hondaFactory;
                break;
            case Car.MAZDA:
                return mazdaFactory;
                break;
            default:
                return mazdaFactory;
                break;
        }
    }
}
class HondaRightDoor {
    makePart() {
        return 'Im Honda Right Door ';
    }
}
class HondaLeftDoor {
    makePart() {
        return 'Im Honda Left Door';
    }
}
class MazdaRightDoor {
    makePart() {
        return 'Im Mazda Right Door ';
    }
}
class MazdaLeftDoor {
    makePart() {
        return 'Im Mazda Left Door';
    }
}
class HondaFactory extends CarPart {
    getLeftDoor() {
        return new HondaLeftDoor();
    }
    getRightDoor() {
        return new HondaRightDoor();
    }
}
class MazdaFactory extends CarPart {
    getLeftDoor() {
        return new MazdaLeftDoor;
    }
    getRightDoor() {
        return new MazdaRightDoor;
    }
}
let factory = CarPart.getFactory(Car.HONDA);
let rightdoor = factory.getRightDoor();
console.log(rightdoor.makePart());
factory = CarPart.getFactory(Car.MAZDA);
rightdoor = factory.getRightDoor();
let leftdoor = factory.getLeftDoor();
console.log(rightdoor.makePart());
console.log(leftdoor.makePart());
