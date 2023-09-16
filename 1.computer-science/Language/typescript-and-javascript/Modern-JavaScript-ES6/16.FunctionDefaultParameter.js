{
    function myFunc(a = 10) {
        return a;
    }

    console.log(myFunc(15));
    console.log(myFunc(null)); //null count as a null value
    console.log(myFunc(undefined));// undefined count as a nothing
}