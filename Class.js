// JS CLASS made by function-prototype
class Person {        //parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    drink() {
        console.log(`${this.name} is drinking`);
    }
}




class Cricketer extends Person {    //subclass
    constructor(name, age, type, country) {
        super(name, age)
        this.typetype = type;
        this.country = country;
    }

    set setType(type) {  //setter
        this.type = type;
    }

    get getType() {      //getter
        return this.type;
    }

    static isEqualAge() {  //this not point object, but point direct Class
        console.log("This is a static Function")
    }

    play() {
        console.log(`${this.name} is playing`);
    }

    eat() {  //polymorphism, to override parent class function
        // super.eat();  //to call parent function
        console.log(`${this.name} is eating rice`);
    }
}




const sakib = new Cricketer('sakib', 35, 'all rounder', 'bangladesh');
sakib.drink();
sakib.eat();

sakib.setType = 'batsman';
console.log(sakib.getType);

Cricketer.isEqualAge();