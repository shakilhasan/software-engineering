// JS CLASS made in function-prototype like this code
function Person(name, age) {        //parent class
    this.name = name;
    this.age = age;
}

Person.prototype = {
    eat: function () {
        console.log(`${this.name} is eating`);
    }
};


function Cricketer(name, age, type, country) {      //subclass
    Person.call(this, name, age) // to access parent class property
    this.type = type;
    this.country = country;
}

Cricketer.prototype = Object.create(Person.prototype); // to access parent class prototype
Cricketer.prototype.constructor = Cricketer; // set updated constructor
Cricketer.prototype.play = function () {
    console.log(`${this.name} is playing`);
}


const sakib = new Cricketer('sakib', 35, 'all rounder', 'bangladesh');
sakib.eat();