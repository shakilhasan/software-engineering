//truthy falsy
{
    // Falsy: False,'', Null, undefined, NaN, 0, -0, 0n
    // Truthy: others than falsy
    //ternary operator is also boolean context
    // let myVar = '';
    let myVar = [];
    // let myVar = -0;
    // let myVar = 0n;
    // let myVar = true;
    // let myVar = 'test';
    // let myVar = [1,2,3];
    // let myVar = document.all;

    if (myVar) { // myVar convert to truthy-falsy/Boolean value
        console.log('I am truthy');
    } else {
        console.log('I am falsy');
    }
}