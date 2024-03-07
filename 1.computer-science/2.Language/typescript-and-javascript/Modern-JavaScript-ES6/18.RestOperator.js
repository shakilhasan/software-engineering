//Rest Operator, same as Spread Operator but different use case
{
    function myFunc() {
        console.log(arguments) //used in previous, but give an ugly object
    }

    function myFunc1(...params) {
        console.log(params) // give a beautiful array
    }

    //or,
    function myFunc2(a, ...params) {
        console.log(a)
        console.log(params) // give a beautiful array
    }

    myFunc(1, 2, 3, 4, 5, 6);
    myFunc1(1, 2, 3, 4, 5, 6);
    myFunc2(1, 2, 3, 4, 5, 6);
}