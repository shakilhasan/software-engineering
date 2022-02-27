//https://youtu.be/oPRx4A13ytI
//Currying in JavaScript
// Currying is combination of multiple partial functions
//*important for job interview
const _ = require('lodash');
//ex-1 ----------------------
{
    console.log('ex-1 -----------------------')
    //Normal pattern
    {
        console.log('Normal --------------------------')

        function multiply(a, b, c) {
            return a * b * c;
        }

        console.log(multiply(1, 2, 3));
    }

    //Currying pattern
    {
        console.log('Currying --------------------------')

        function curriedMultiply(a) {
            return function (b) {
                return function (c) {
                    return a * b * c;
                }
            }
        }
        console.log(curriedMultiply(1)(2)(3));

        const curriedMultiply1 =(a)=>(b)=>(c)=>a * b * c; //or, shortcut by arrow function
        console.log(curriedMultiply1(1)(2)(3));

        //or
        let step1 = curriedMultiply(1);
        let step2 = step1(2);
        let step3 = step2(3);
        console.log(step3);
    }

}

//ex-2 -----------------
{
    console.log('ex-2 -----------------------')

    //normal
    {
        console.log('Normal --------------------------')

        function discount(price, disc) {
            return price - price * disc;
        }

        let customer1D = discount(500, .1);
        let customer2D = discount(600, .1);
        let customer3D = discount(700, .1);
        console.log(customer1D, customer2D, customer3D);
    }

    //Currying
    {
        console.log('Currying --------------------------')

        function curriedDiscount(disc) {
            return function (price) {
                return price - price * disc;
            }
        }

        let tenPercentDiscount = curriedDiscount(.1); // also called partial function
        let twentyPercentDiscount = curriedDiscount(.2);
        let customer1D = tenPercentDiscount(500);
        let customer2D = tenPercentDiscount(600);
        let customer3D = tenPercentDiscount(700);

        let customer4D = twentyPercentDiscount(700);
        console.log(customer1D, customer2D, customer3D, customer4D);

    }
}

// make a CurryConverter function, take a normal function then convert into curriedFunction
console.log('make a CurryConverter function: take a normal function then convert into curriedFunction----')
//ex-1 ------
{
    console.log('ex-1 --------------');

    //CurryConverter function
    function curry(func) {
        return function curried(...args) {
            if (args.length >= func.length) {
                return func.apply(this, args);
            } else {
                return function (...args2) {
                    return curried.apply(this, args.concat(args2));
                };
            }

        };
    }

    //normal function
    function sum(a, b, c) {
        return a + b + c;
    }

    let curriedSum = curry(sum);
    console.log(curriedSum(1, 2, 3)); //normal call
    console.log(curriedSum(1, 2)(3));
    console.log(curriedSum(1)(2, 3));
    console.log(curriedSum(1)(2)(3)); //curried call

    //or, using lodash curry function
    let curriedSum1 = _.curry(sum);
    console.log(curriedSum1(1)(2)(3));
}

//ex-2 --------------
{
    console.log('ex-2 --------------');
    function log(date, important, message) {
        console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${important}:${message}`);
    }
    let curriedLog = _.curry(log);
    curriedLog(new Date(),'DEBUG','some debug');//normal call
    curriedLog(new Date())('DEBUG')('some debug'); //curried call

    let logNow = curriedLog(new Date()); // partial call
    logNow('INFO','info message');

}