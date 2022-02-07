//Hoisting: define top of his scope
// var,let,const hoisting-----------------------------
// var,let,const are allocated to memory at js compile time,
// var assign undefined value but let,const not assign any value
console.log(book);
book = 'Math-Var';
var book;
var BOOK = 'BIOLOGY-VAR';

// console.log(language); //error, let hoisted but not assign any value like var
let language
language = 'Java-let';
let LANGUAGE = 'JAVASCRIPT-LET';

function getBook() {
    //var is functional scope, so it hoisted  here
    //book = undefined, it is hoisted local book
    if (book) {
        book
    } else {
        var book;
        book = BOOK;
    }
    return book;
}

function getLanguage() {
    //book is outer book
    if (language) {
        language
    } else {
        //let is block scope, so it hoisted  here
        let language;
        language = LANGUAGE;
    }
    return language;
}

console.log(`i read ${getBook()}`);
console.log(`i love ${getLanguage()}`);


//Function Hoisting-------------------------
//function also hoisted to top of his scope
muFunc();
function muFunc() {
    console.log("This is a function")
}