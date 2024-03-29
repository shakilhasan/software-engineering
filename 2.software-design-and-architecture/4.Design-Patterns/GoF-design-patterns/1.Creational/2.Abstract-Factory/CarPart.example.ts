// TODO: I think, this example is not proper implementation
//https://medium.com/@cristianalemanfuentes/abstract-factory1-in-typescript-gof-design-pattern-e8f661e49071
enum Car {
    HONDA,
    MAZDA,
}

abstract class CarPart{

    static getFactory(key:Car){
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

    abstract getLeftDoor():any;
    abstract getRightDoor():any;
}

class HondaRightDoor {
    makePart(){
        return 'Im Honda Right Door ';
    }
}
class HondaLeftDoor {
    makePart(){
        return 'Im Honda Left Door';
    }
}
class MazdaRightDoor {
    makePart(){
        return 'Im Mazda Right Door ';
    }
}
class MazdaLeftDoor {
    makePart(){
        return 'Im Mazda Left Door';
    }
}

class HondaFactory extends CarPart{
    getLeftDoor() {
        return new HondaLeftDoor();
    }

    getRightDoor() {
        return new HondaRightDoor();
    }
}

class MazdaFactory extends CarPart{
    getLeftDoor() {
        return new MazdaLeftDoor;
    }

    getRightDoor() {
        return new MazdaRightDoor;
    }
}


let factory1 =  CarPart.getFactory(Car.HONDA);
let rightdoor = factory1.getRightDoor();

console.log(rightdoor.makePart());

factory1 =  CarPart.getFactory(Car.MAZDA);
rightdoor = factory1.getRightDoor();
let leftdoor = factory1.getLeftDoor();

console.log(rightdoor.makePart());
console.log(leftdoor.makePart());
