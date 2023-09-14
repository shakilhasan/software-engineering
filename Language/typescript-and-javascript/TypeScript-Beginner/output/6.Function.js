"use strict";
{
    // function type
    let myfunc; // 'function'-keyword is reserve
    // myfunc =5; //error
    const fn = () => ('ff');
    myfunc = fn;
    console.log(myfunc());
}
{
    // parameter type
    const myfunc = (a, b) => {
        console.log(`hello ${a} ${b}`);
    };
    myfunc("A", "B");
}
{
    // optional parameter type
    const myfunc = (a, b, c) => {
        console.log(`hello ${a} ${b}`);
    };
    myfunc("A", "B");
}
{
    // default parameter value
    const myfunc = (a, b, c = "C") => {
        console.log(`hello ${a} ${b} ${c}`);
    };
    myfunc("A", "B", "optional");
    myfunc("A", "B");
}
{
    //return type
    const myfunc = (a, b) => {
        return a * b; // a,b both are number, so return type is number
    };
    console.log(myfunc(3, 5));
}
{
    //return type
    const myfunc = (a, b) => {
        return a * b;
    };
    console.log(myfunc(3, 5));
}
