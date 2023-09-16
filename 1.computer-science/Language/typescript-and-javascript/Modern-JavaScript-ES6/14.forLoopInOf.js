//
//for loop, for in, for of
//for loop, https://www.w3schools.com/js/js_loop_for.asp
{

    let text = '';
    for (let i = 0; i < 5; i++) {
        text += "The number is " + i + "<br>";
    }

}

//for in,  statement loops through the properties of an Object:
{
    //Each iteration returns a key (x)

    //ex-1
    {
        const person = {fname: "John", lname: "Doe", age: 25};

        let text = "";
        for (let x in person) {
            text += person[x];
        }
    }
    //For In Over Arrays, Do not use for in over an Array if the index order is important.
    {
        const numbers = [45, 4, 9, 16, 25];

        let txt = "";
        for (let x in numbers) {
            txt += numbers[x];
        }
    }
    //Array.forEach(), calls a function (a callback function) once for each array element.
    {
        const numbers = [45, 4, 9, 16, 25];

        let txt = "";
        numbers.forEach(myFunction);

        function myFunction(value, index, array) {
            txt += value;
        }
    }
}

//for of, statement loops through the values of an iterable object.
//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
{   //ex-1
    {
        const cars = ["BMW", "Volvo", "Mini"];

        let text = "";
        for (let x of cars) {
            text += x;
        }
    }
    //ex-2
    {
        let language = "JavaScript";

        let text = "";
        for (let x of language) {
            text += x;
        }
    }
}