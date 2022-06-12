{
    let playerName = "Sakib";
    let age = 35;
    console.log(playerName);
// age="Sakib"; //error
    console.log(playerName);
}
{
    // function
    function multiply(a: number, b: number) {
        return a * b;
    }

    console.log(multiply(4, 5));
}
{
    //array
    let fruits = ['apple', 'banana', 'orange'];
    fruits.push('mango');
    // fruits.push(6); //error
    console.log(fruits);

    let mixed = ['apple', 3];
    mixed.push(4);
    mixed.push('mango');
    console.log(mixed);
}
{
    //object
    let person = {
        name: "Sakib", age: 35, isCaptain: true,
    };
    person.age = 36;
    // person.country="bd"; //error
    console.log(person);
}
