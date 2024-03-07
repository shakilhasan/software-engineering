//https://www.w3schools.com/js/js_arrow_function.asp
//'new' keyword is not work for arrow function
//Arrow function:
{
    //Before:
    hello = function () {
        return "Hello World!";
    }
    //With Arrow Function:
    hello = () => {
        return "Hello World!";
    }

    //Arrow Functions Return Value by Default:It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
    hello = () => "Hello World!";

    //Arrow Function With Parameters:
    hello = (val) => "Hello " + val;

    //Arrow Function Without Parentheses:In fact, if you have only one parameter, you can skip the parentheses as well:
    hello = val => "Hello " + val;
}

//ex-1:
{
    console.log('ex-1 ----------------------------')
    let javascript = {
        name: "JavaScript",
        libraries: ['React', 'Angular', 'Vue'],

        //With a regular function this represents the object that calls the function:
        printLibraries: function () {
            // let self =this
            this.libraries.forEach(
                function (a) {
                    //this = global
                    console.log(`${this} -${this.name} loves ${a}`) // function in forEach call by global context, so 'this' point 'global' object
                }
                // function(a){console.log(`${self.name} loves ${a}`)}
            )
        },
        //With an arrow function this represents the owner of the function:
        printLibraries1: function () {
            this.libraries.forEach(
                (a) => {
                    //this = javascript
                    console.log(`${this}- ${this.name} loves ${a}`) // 'this' same as function outer 'this'(javascript)
                }
            )
        }

    }

    javascript.printLibraries();
    javascript.printLibraries1();
}

//ex-2:
{
    console.log('ex-2 ----------------------------')


}
