//just for practice, fix errors for run
//https://youtu.be/NXsB6VJcscs
//Best Practices of JavaScript - Part 1

//A. Variable Naming--------
{
    // 1. meaningfully variable name
    {
        //bad
        let daysll;
        //good
        let daySinceLastLogin;
    }

    // 2. avoid unnecessary extra word
    {
        //bad
        let nameValue;
        let theProduct;

        //good
        let name;
        let product;

    }

    // 3.can understand purpose by variable name
    {
        let products = ['bag', 'shirt', 'watch'];

        function doSomething(product) {

        }

        //bad
        products.forEach((p) => {
            //What does 'p' stand for?
            doSomething(p)
        })

        //good
        products.forEach((product) => {
            doSomething(product)
        })
    }

    //4. no need to add unnecessary extra context
    {
        //bad
        let product = {
            productId: 1, productName: 'book', productPrice: 100, productUnits: 50
        }

        //good
        product = {
            id: 1, name: 'book', price: 100, units: 50
        }
    }
}

//B. Function Naming
{   // function name should long, meaningful and descriptive
    //bad
    function email(user) {
        //implementation
    }

    //good
    function sendEmailToUser(user) {
        //implementation
    }
}

// C. Function Argument
{
    //1. avoid many arguments, useful for testing,.. etc
    {
        //bad
        function getProducts(field, fromDate, toDate) {
            //implementation
        }

        //good
        function getProducts1({field, fromDate, toDate}) {
            //implementation
        }
    }

    //2. use default arguments, not conditional.
    {
        //bad
        function createShape(type) {
            const shapeType = type || 'circle';
        }

        //good
        function createShape1(type = 'circle') {
            //....
        }
    }

    //3. no need to sent flag as parameter, useful for testing. not increase performance but beautify code
    {
        //bad
        function createFile(name, isPublic) {
            if (isPublic) {
                fs.create(`./public/${name}`);
            } else {
                fs.create(name);
            }
        }

        //good, different function for two check
        function createFile1(name) {
            fs.create(name);
        }

        function createPublicFile(name) {
            fs.create(`./public/${name}`);

        }


    }
}

//D.Single Task per Function
{
    //multiple task in one function is not good.
    //can fix in refactoring,
    // for re-usability

    //bad
    function notifyUsers(users) {
        users.forEach((user) => {
            const userRecord = database.lookup(user);
            if (userRecord.isVarified()) {
                notify(user);
            }
        })
    }

    //good
    function notifyVarifiedUsers(users) {
        users.filter(isUserVarified).forEach(notify);
    }

    function isUserVarified(user) {
        const userRecord = database.lookup(user);
        return userRecord.isVarified();
    }
}

//E. strong type check is best
{
    1 == '1' //true
    1 === '1' //false

    0 == false //true
    0 === false //false


    // full example
    const val = '123';
    if (val == '123') {
        //reachable
        console.log(`1.${val}`);
    }
    if (val == 123) {
        //reachable
        console.log(`2.${val}`);
    }
    if (val === '123') {
        //reachable
        console.log(`3.${val}`);
    }
    if (val === 123) {
        //unreachable
        console.log(`4.${val}`);
    }
}

//F. use Object.assign to set default object value
{

    //bad
    const shapeConfig = {
        type: 'circle', width: 100, height: null,
    }

    function createShape2(config) {
        config.type = config.type || 'circle';
        config.width = config.width || 300;
        config.height = config.height || 300;
    }

    createShape2(shapeConfig);


    //good
    const shapeConfig1 = {
        type: 'circle', width: 100,
    }

    function createShape3(config) {
        config = Object.assign(  //merge source and target, if source is missing then can find in target.
            {
                type: 'circle', width: 300, height: 300,
            }, config);
    }

    createShape3(shapeConfig1);
}

//G. don't pollute global prototypes
{
    //bad
    Array.prototype.myfunction = function myfunction() {
        //implementation
    }

    //good
    class MyArray extends Array {
        myfunction() {

        }
    }
}

//H. use conditional shorthand
{
    //not beautiful
    if (isValid === true) {
        //do somethings ....
    }
    if (isValid === false) {
        //do somethings ....
    }

    //good
    if (isValid) {
        //do somethings ....
    }
    if (!isValid) {
        //do somethings ....
    }
}

//I. use method chaining
{
    //bad
    class Product {
        constructor(name) {
            this.name = name;
        }

        setUnits(units) {
            this.units = units;
        }

        setPrice(price) {
            this.price = price;
        }

        save() {
            console.log(this.name, this.price, this.units);
        }
    }

    const product = new Product('Bag');
    product.setPrice(23.99)
    product.setUnits(12);
    product.save();


    //good
    class Product1 {
        constructor(name) {
            this.name = name;
        }

        setUnits(units) {
            this.units = units;
            return this;
        }

        setPrice(price) {
            this.price = price;
            return this;
        }

        save() {
            console.log(this.name, this.price, this.units);
        }
    }

    const product1 = new Product1('Bag');
    product1.setPrice(23.99).setUnits(12).save();
}

//J.Avoid use eval()
{
    //it create security vulnaribility
    //bad
    eval("alert('hi');")  //take string, run it as code
}

//K. use Curly Braces
{
    //bad
    if (somethings) x = false;


    //good
    if (somethings) {
        x = false;
    }
}

//L. Add methods on .prototype when writing constructors
{
    //bad, performance issue
    function Player(name, age) {
        this.name = name;
        this.age = age;
        this.play = function () {
            console.log(`${this.name} is playing`)
        }
    }

    const sakib = new Player('sakib', 35)
    const tamim = new Player('tamim', 35)
    sakib.play();
    console.log(sakib);
    console.log(tamim);


    //good
    function Player1(name, age) {
        this.name = name;
        this.age = age;
    }

    Player1.prototype.play = function () {
        console.log(`${this.name} is playing`)
    }
    const sakib1 = new Player1('sakib', 35)
    const tamim1 = new Player1('tamim', 35)
    sakib1.play();
    console.log(sakib1);
    console.log(tamim1);
}

//M. Declare variables outside the for statement
{
    const someArray = [1, 2, 3, 4, 5, 6];
    //bad, performance issue
    for (let i = 0; i < someArray.length; i++) {  // someArray.length, execute every iteration
        const container = document.getElementById('container');  // execute every iteration
        container.innerHTML += 'my number' + i;
        console.log(i);
    }

    //good
    const container = document.getElementById('container');
    const len = someArray.length;
    for (let i = 0; i < len; i++) {  // someArray.length, execute every iteration
        container.innerHTML += 'my number' + i;
        console.log(i);
    }
}

//N. use let and const as possible instead of var
{
    //use const when variable never change
    //use let when variable can change
}

//O. omit var keyword, use comma instead
{
    //bad
    var num1 = 1;
    var num2 = 2;
    var num3 = 3;

    //good
    var num1 = 1, num2 = 2, num3 = 3;
}

//P.Always use semicolon
{
    //not good, hard to find error
    {
        let item = 'item1'

        function doSomething() {
            return 'something'
        }
    }
    //good,
    {
        let item = 'item1';

        function doSomething() {
            return 'something';
        }
    }
}

//Q. use IIFE(Immediately invoked function expression) as much as possible
{
    //when need immediate function call
    //not good
    function a() {
        //do Something
    }

    a();

    //good
    (function a() {
        //do Something
    })();

}

//R.Module Pattern , Avoid using global
{
    //bad
    const current = null;

    function init() {
        //do somethings
    }

    function change() {
        //do somethings
    }

    function verify() {
        //do somethings
    }

    //good
    const myModule = (function () {
        const current = null;

        function init() {
            //do somethings
            console.log('init')
        }

        function change() {
            //do somethings
        }

        function verify() {
            //do somethings
        }

        return {
            init, change, verify
        }
    })();

    myModule.init();
}

//S. Avoid language attribute, in html
{
    //bad ,language attribute will deprecate soon
    <script src="text/javascript" language="javascript"></script>;

    //good
    <script src="text/javascript"></script>;
}