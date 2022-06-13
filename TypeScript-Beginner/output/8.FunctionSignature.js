"use strict";
{
    // Function Signature
    let add;
    add = (a, b) => {
        return a + b;
    };
    console.log(add(1, 3));
}
{
    let calculate;
    calculate = (a, b, c) => {
        if (c === 'add') {
            return a + b;
        } else {
            return a - b;
        }
    };
    console.log(calculate(6, 3, 'add'));
    console.log(calculate(6, 3, 'minus'));
}
{
    let userDetails;
    userDetails = (id, user) => {
        console.log(`id- ${id} age- ${user.age}`);
    };
    userDetails(1, {name: "sakib", age: 40});
}
