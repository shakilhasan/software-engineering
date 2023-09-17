// Spread Operator
{
    let numbers = [1, 2, 3, 4, 5];
    let newNumber = [...numbers, 6, 7, 8];
}
//to exact copy of array
{
    let numbers = [1, 2, 3, 4, 5];
    let a = numbers;  // not exact copy, but copy numbers reference
    let b = [...numbers]; //exact copy of array
    a.push(8); //change also numbers

    console.log(numbers);
    console.log(a);
    console.log(b);
}

//to concat two array
{
    let numbers = [1, 2, 3, 4, 5];
    let numbers1 = [10, 20, 30, 40, 50];
    let numbers3 = [...numbers, ...numbers1];
    console.log(numbers3)
}

//also work for object
{
    let numbers = {
        one: 1,
        two: 2,
    };
    let numbers1 = {
        a: 1,
        b: 2,
    };
    let numbers3 = {...numbers, ...numbers1};
    console.log(numbers3)
}