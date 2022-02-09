// 4 Bindings: Implicit, Explicit, new, window Binding

//1.Implicit Binding--------------------------------------------
{
    console.log("1.Implicit Binding-----------------------")
    //this point the nearest object by dot(.) of function
    //ex-1
    const printPlayerNameFunction = function (obj) {
        obj.printPlayerName = function () {
            console.log(this.name)
        }
    }
    const tamim = {
        name: "tamim", age: 31, printPlayerAge: function () {
            console.log(this.age)
        }
    }
    printPlayerNameFunction(tamim)
    tamim.printPlayerAge() // this point tamim
    tamim.printPlayerName() // this point tamim

    //ex-2
    const Person = function (name, age) {
        return {
            name: name, age: age, printName: function () {
                console.log(this.name);
            }, father: {
                name: 'Mr. XYZ', printName: function () {
                    console.log(this.name);
                }
            }
        };
    };
    const sakib = Person("sakib", 35);
    sakib.printName();
    sakib.father.printName(); //this point father, this of the nearest object of function
}

//2.Explicit Binding------------------------------------------
{
    console.log("2.Explicit Binding-----------------------")
    const printName = function (type) {
        console.log(`${this.name}-${type}`);
    }
    const sakib = {
        name: "sakib", age: 34
    }
    const type = "batsman"
    printName.call(sakib, type) //this point first parameter sakib by Explicitly call

    const v = [type, 'bangladesh']
    printName.apply(sakib, v) //same as call() but can pass array

    const newFunc = printName.bind(sakib, type) //same as call() but function not execute but return a new function
    newFunc();
}

//3.new Binding------------------------------------------
{
    console.log("3.new Binding-----------------------")
    function Person(name, age) {
        // let this =Object.create(null); //JS execute in backend
        this.name = name
        this.age = age
        console.log(`${this.name} is ${this.age} years old`)
        // return this
    }
    const sakib = new Person('Sakib', 37)  // return this object to sakib
}

//4.window Binding-------------------------------------------
{
    // "use strict";
    console.log("4.window Binding-----------------------")
    const PrintName = function () {
        console.log(global === this) //without binding by-default this point window/global
        console.log(this)
        console.log(this.name)
    }
    const sakib = {
        name: 'sakib', age: 35
    }
    PrintName();
}
