// Primitive Values: String, Number, Boolean, Null, Undefined, Symbol
// Reference Values: (others than Primitive) master Object ->  Object, Array, Function, Date, ...
// images/PrimitiveVsReference.png
// Primitive:
{
    //images/PrimitiveVsReference-1.png
    let a=5;
    let b=a;
    b=9
    console.log(a);
    console.log(b);
}
// Reference Values:
// ex-1
{
    console.log("ex-1------------------- ")
    //images/PrimitiveVsReference-2.png
    let a = {
        name: 'Sakib',
    };
    let b=a;
    a.name= 'Tamim'; // mutation/ change
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
    let b=a;
    a= []; // assignment
    console.log(a);
    console.log(b);
}
// ex-3
{
    console.log("ex-3------------------- ")
    let a = {
        name: 'Sakib',
    };
    let b= {...a};  //immutably
    a.age= 5;
    console.log(a);
    console.log(b);
}
// ex-4
{
    console.log("ex-4------------------- ")
    let a = {
        name: 'Sakib',
        libraries:['react','vueJS']
    };
    let b= {...a};  //immutably, new object, but libraries point same memory
    a.age= 5;
    a.libraries.push('angular')
    console.log(a);
    console.log(b);
}

