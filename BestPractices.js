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
        let products=['bag','shirt','watch'];
        function doSomething(product) {

        }
        //bad
        products.forEach((p)=>{
            //What does 'p' stand for?
            doSomething(p)
        })

        //good
        products.forEach((product)=>{
            doSomething(product)
        })
    }

    //4. no need to add unnecessary extra context
    {
        //bad
        let product={
            productId:1,
            productName:'book',
            productPrice:100,
            productUnits:50
        }

        //good
         product={
            id:1,
            name:'book',
            price:100,
            units:50
        }
    }
}

//B. Function Naming
{   // function name should long, meaningful and descriptive
    //bad
    function email(user){
        //implementation
    }

    //good
    function sendEmailToUser(user){
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
        function createShape(type){
            const shapeType = type||'circle';
        }

        //good
        function createShape1(type='circle'){
            //....
        }
    }

    //3. no need to sent flag as parameter, useful for testing. not increase performance but beautify code
    {
        //bad
        function createFile(name, isPublic){
            if(isPublic){
                fs.create(`./public/${name}`);
            }else {
                fs.create(name);
            }
        }

        //good, different function for two check
        function createFile1(name){
            fs.create(name);
        }
        function createPublicFile(name){
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
    function notifyUsers(users){
        users.forEach((user)=>{
            const userRecord= database.lookup(user);
            if(userRecord.isVarified()){
                notify(user);
            }
        })
    }

    //good
    function notifyVarifiedUsers(users){
        users.filter(isUserVarified).forEach(notify);
    }
    function isUserVarified(user){
        const userRecord= database.lookup(user);
        return userRecord.isVarified();
    }
}

//E. strong type check is best
{
    1=='1' //true
    1==='1' //false

    0==false //true
    0===false //false


    // full example
    const val ='123';
    if(val=='123'){
        //reachable
        console.log(`1.${val}`);
    }
    if(val==123){
        //reachable
        console.log(`2.${val}`);
    }
    if(val==='123'){
        //reachable
        console.log(`3.${val}`);
    }
    if(val===123){
        //unreachable
        console.log(`4.${val}`);
    }
}



