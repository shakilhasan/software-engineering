"use strict";
//GENERICS
{
    //without generic
    const addID = (obj) => {
        let id = Math.floor(Math.random() * 100);
        return Object.assign(Object.assign({}, obj), {id});
    };
    let user = addID({
        name: "Mashrafi", age: 40,
    });
    console.log(user.id);
    // user.name; //error
}
{
    //with generic, type is work like a  variable
    const addID = (obj) => {
        let id = Math.floor(Math.random() * 100);
        return Object.assign(Object.assign({}, obj), {id});
    };
    let user = addID({
        name: "Mashrafi", age: 40,
    });
    console.log(user.id);
    console.log(user.name);
    let str = addID("abcde"); // <T> can receive any type
    console.log(str);
}
{
    // generic with extends
    const addID = (obj) => {
        let id = Math.floor(Math.random() * 100);
        return Object.assign(Object.assign({}, obj), {id});
    };
    let user = addID({
        name: "Mashrafi", age: 40,
    });
    // let str=addID("abcde"); //error, <T> can receive only object
}
{
    // extends with define object
    const addID = (obj) => {
        let id = Math.floor(Math.random() * 100);
        return Object.assign(Object.assign({}, obj), {id});
    };
    let user = addID({
        name: "Mashrafi", age: 40, country: "BD", // extra property can pass
    });
}
{
    const resonse1 = {
        status: 200, type: 'good', data: {
            name: 'sakib', age: 40
        },
    };
    console.log(resonse1);
}
