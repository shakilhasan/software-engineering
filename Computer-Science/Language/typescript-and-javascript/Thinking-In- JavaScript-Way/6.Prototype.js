// Prototype is function's property, that point an object
// prototype in function---------------
function Person(name, age) {
    // let this = Object.create(Person.prototype)  //auto execute
    this.name = name;
    this.age = age;
    console.log(this)
    // return this;
}

Person.prototype = {
    eat() {
        console.log("Person is eating")
    }, sleep() {
        console.log("Person is sleeping")
    }, play() {
        console.log("Person is playing")
    }
}

const sakib = new Person('sakib', 35)
const tamim = new Person('tamim', 30)

sakib.eat()
tamim.play()


// prototype in Array function---------------
let persons = []; //new Array();
console.log(Array.prototype)


// use of Object.create----------------
const human = {
    eat() {
        console.log("human is eating")
    }, sleep() {
        console.log("human is sleeping")
    }
}

man = Object.create(human) //man not assign human, but can access human property, like inheritance
man.name = "myMame"
console.log(man)
man.eat()

//-------------------------
