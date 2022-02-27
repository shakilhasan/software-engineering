const _ = require('lodash');// Primitive Values: String, Number, Boolean, Null, Undefined, Symbol
// Reference Values: (others than Primitive) master Object ->  Object, Array, Function, Date, ...
// images/PrimitiveVsReference.png
// Primitive:
{
    console.log("Primitive Type------------------- ")
    //images/PrimitiveVsReference-1.png
    let a = 5;
    let b = a;
    b = 9
    console.log(a);
    console.log(b);
}
// Reference Values:
// ex-1
{
    console.log("Reference Type------------------- ")
    console.log("ex-1------------------- ")
    //images/PrimitiveVsReference-2.png
    let a = {
        name: 'Sakib',
    };
    let b = a;
    a.name = 'Tamim'; // mutation/ change
    console.log(a);
    console.log(b);
}
// ex-2
{
    console.log("ex-2------------------- ")
    //images/PrimitiveVsReference-3.png
    let a = {
        name: 'Sakib',
    };
    let b = a;
    a = []; // assignment
    console.log(a);
    console.log(b);
}
// ex-3
{
    console.log("ex-3------------------- ")
    let a = {
        name: 'Sakib',
    };
    let b = {...a};  //immutably
    a.age = 5;
    console.log(a);
    console.log(b);
}
// ex-4
{
    console.log("ex-4------------------- ")
    let a = {
        name: 'Sakib', libraries: ['react', 'vueJS']
    };
    let b = {...a};  //immutably, new object, but libraries point same memory
    a.age = 5;
    a.libraries.push('angular')
    console.log(a);
    console.log(b);
}

// ex-5
{
    console.log("ex-5------------------- ")
    let a = {
        name: 'Sakib', libraries: ['react', 'vueJS']
    };
    let b = _.cloneDeep(a);  // full immutably, using lodash
    a.age = 5;
    a.libraries.push('angular')
    console.log(a);
    console.log(b);
}
// ex-6
{
    console.log("ex-6 ------------------- ")
    //Primitive type----
    let a = 'Sakib'; // Primitive type
    a.test = 'tamim' //ignored, Primitive type can not mutate

    console.dir(a);
    console.log(a.charAt(2)); // access from wrapper prototype


    // wrapper type -----
    //Primitive  can be Reference using new Constructor keyword
    let b = new String('Sakib'); // wrapper type
    b.test = 'tamim' // Reference type can mutate

    console.dir(b);
    console.log(b.charAt(2)); // access from prototype

}


//Pass by Reference------------------------------------
//ex-1
{
    console.log("Pass by Reference ------------------- ")

    console.log("ex-1 ------------------- ")
    let a = 5;
    let change = (val) => {
        val = 2; // assignment, so create a new local  variable
    }
    change(a); //pass by reference but looks like pass by value. when pass variable it always passed by reference
    console.log(a);


    let b = {
        name: 'Sakib',
    };
    let change1 = (val) => {
        val = {}; // assignment, so create a new local object
    }
    change(b); //pass by reference but looks like pass by value. when pass variable it always passed by reference
    console.log(b);

}

//ex-2
{
    console.log("ex-2 ------------------- ")
    let a = {num: 5};
    let change = (val) => {
        val.num = 2; // mutation, so change pointed reference value
    }
    change(a); //pass by reference but looks like pass by value. when pass variable it always passed by reference
    console.log(a);


    let b = {
        name: 'Sakib',
    };
    let change1 = (val) => {
        val.name = 'tamim'; // mutation, so change pointed reference value
    }
    change1(b); //pass by reference but looks like pass by value. when pass variable it always passed by reference
    console.log(b);

}


