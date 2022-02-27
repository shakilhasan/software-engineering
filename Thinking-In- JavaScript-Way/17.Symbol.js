//https://youtu.be/OhXI8qsf9h8
//symbol create
{
    console.log('symbol create ------------------------')
    const symbol1 = Symbol(); // can not create with 'new' keyword
    const symbol2 = Symbol();
    console.log(symbol1);
    console.log(symbol2);
    console.log(symbol1 == symbol2);
    console.log(symbol1 === symbol2);
}

//symbol create with description
{
    console.log(' symbol create with description------------------------')
    const symbol1 = Symbol('symbol1');
    const symbol2 = Symbol('symbol2');
    console.log(symbol1);
    console.log(symbol2);
    console.log(symbol1 == symbol2); // symbol1 and symbol2 are different
    console.log(symbol1 === symbol2);
}

//use for to create unique symbols
{
    console.log('use for to create same symbols ------------------------')
    const symbol1 = Symbol.for('symbol1');
    const symbol2 = Symbol.for('symbol1');
    console.log(symbol1);
    console.log(symbol2);
    console.log(symbol1 === symbol2);  // symbol1 and symbol2 are unique
}

// symbol can use as object property/key
{
    console.log('symbol can use as object property/key ------------------------')
    const cricket = Symbol.for('this is cricket symbol');
    const myObject = {
        name: 'sakib', [cricket]: 'Bangladesh' // use [] to use variable as object key
    }
    console.log(myObject);
    delete myObject['Symbol(this is cricket symbol)']; // not work, symbol as object key can not delete
    console.log(myObject);

}

//symbol use case
{
    console.log(' symbol use case------------------------')
    //1.to invisible object key
    {
        console.log('1.to invisible object key ------------------------')
        const obj = {}
        obj.name = 'sakib';
        obj.estd = '1995';
        obj[Symbol('founder')] = 'Brendan Eich'
        console.log(Object.keys(obj));
    }

    //2.to overwrite prototype of build-in object
    {
        console.log('2.to overwrite prototype of build-in object ------------------------')
        const includes = Symbol("my own array includes method");
        Array.prototype[includes] = () => {
            console.log('This is my array includes function');
        };
        const myArray = [1, 2, 3];
        console.log(myArray.includes(2))
        console.log(myArray['includes'](2))
        myArray[includes](2); // execute custom prototype
    }

    //3. Symbol.search used by  String.prototype.search()
    {
        console.log('3. ------------------------')
        //steps:
        //1.covert title to String('JavaScript')
        //2.convert parameter 'JavaScript' into RegExp
        //3.find Symbol.search() in RegExp
        const title = 'JavaScript';
        console.dir(String);
        console.log(title.search(/Script/));
    }

    //4.make a custom String.prototype.search like above (3)
    {
        console.log('4. ------------------------')

        class Product {
            constructor(title) {
                this.title = title;
            }

            //implement search
            [Symbol.search](string) {
                return string.indexOf(this.title) >= 0 ? 'Found' : 'not fount';
            }
        }

        console.log('javascript'.search('script'));
        let laptop = new Product('laptop');
        console.log('Hp laptop'.search(laptop));
    }
}
