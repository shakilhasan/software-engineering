// Higher Order Function: take function as parameter or return
// function is special type of object ------------
{
    const a = function () {
        console.log("Hello World")
    }
    a.name = "sakib"
    console.dir(a)
    console.log(a.name)
}


// ex-1 ----------------
{
    console.log("ex-1 ----------------")
    const numbers = [1, 2, 3, 5]
    let result1 = []
    // without Higher Order Function
    for (let i = 0; i < numbers.length; i++) {
        result1.push(numbers[i] * 2)
    }
    console.log(result1)

    // with Higher Order Function
    let result2 = numbers.map(function (number) {   // receive a function return a new array
        return number * 3
    });
    console.log(result2)
}


// ex-2 ----------------
{
    console.log("ex-2 ----------------")
    const numbers = [1, 2, 3, 4, 5]
    let result1 = []
    // without Higher Order Function
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 3) {
            result1.push(numbers[i])
        }
    }
    console.log(result1)

    // with Higher Order Function
    let result2 = numbers.filter(number => number > 3); // receive a function return a new array
    console.log(result2)
}


// ex-3 array.map() build in by me ----------------
{
    console.log("ex-3 ----------------")
    const numbers = [1, 2, 3, 5]

    function mapHasan(arr, fn) {
        const newArray = [];
        for (let i = 0; i < arr.length; i++) {
            newArray.push(fn(arr[i]));
        }
        return newArray;
    }

    const result = mapHasan(numbers, function (number) {
        return number * 5;
    })
    console.log(result);
}