"use strict";
{
    const userDetails = (id, user) => {
        console.log(`User id is ${id}, name is ${user.name}, age is ${user.age}`);
    };
    const sayHello = (user) => {
        console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
    };
    userDetails(1, {name: "sakib", age: 35});
    sayHello({name: "sakib", age: 35});
}
