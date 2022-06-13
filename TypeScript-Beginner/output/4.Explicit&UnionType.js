"use strict";
{
    let a;
    let b; // explicit type
    let c; // union type
    a = 'sakib';
    b = 4;
    // b='tamin';  //error
    c = 5;
    c = 'tamim';
}
{
    //array
    {
        console.log("array _________________________");
        let a = [];
        a.push('a', 'tamim');
        console.log(a);
    }
    {
        let a = []; // union type
        a.push(1, 2, 'tamim');
        console.log(a);
    }
}
{
    //object
    console.log("object _________________________");
    {
        let obj;
        obj = {
            name: 'sakib',
            age: 34,
            adult: true,
            // adult:'tamim', // error
        };
        // obj=[1,2,3,4,5]; // error
        console.log(obj);
    }
    {
        let obj;
        obj = [1, 2, 3, 4]; // array is a certain type of object
        console.log(obj);
    }
}
