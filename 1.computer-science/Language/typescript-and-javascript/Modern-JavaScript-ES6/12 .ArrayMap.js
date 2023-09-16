// array.map(function(currentValue, index, arr), thisValue)

//map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.
{
    const numbers = [65, 44, 12, 4];
    const newArr = numbers.map(myFunction)

    function myFunction(num) {
        return num * 10;
    }

    console.log(newArr)
    console.log(numbers)

}