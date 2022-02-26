//https://youtu.be/DNC6MxpCueY
//should have known about Symbol and iterator
//generator, generator is like update version of iterator, or wrapper
{
    function* generator() {
        yield 1;
        yield 2;
        // return 'I am finished'; //generator end here
        yield 3;
        yield 4;
    }

    let iterator = generator(); //generator() function return an iterator
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

//Syntaxes of Generator function
{
    //as Generator function
    function* myGenerator1() {
    }

    //or...
    function* myGenerator2() {
    }

    //or...
    function* myGenerator3() {
    }

    //as Generator methods
    const myGenerator4 = function* () {
    }

    //Generator arrow function, can't use it with arrow function
    // let generator=*()=>{}

    //Inside class
    class myClass {
        * myGenerator() {
        }
    }

    //Inside object Literal
    const myObject = {
        * myGenerator() {
        }
    }
}

//Example:1- Make Object Iterable
{
    console.log('Example:1- Make Object Iterable------------------')
    let obj = {
        'value1': 1, 'value2': 2, 'value3': 3, 'value4': 4,
    }
    //ex-1
    {
        console.log('ex-1------------------')
        Object.prototype[Symbol.iterator] = function () {
            const entries = Object.entries(this);
            let count = entries.length;
            let index = 0;
            return {
                next() {
                    if (count > 0) {
                        let result = {done: false, value: entries[index][1]};
                        count--;
                        index++;
                        return result;
                    }
                    return {done: true};
                }
            }
        }
        for (let element of obj) {
            console.log(element);
        }
        console.log([...obj])

    }
    //ex-2, using generator
    {
        console.log('ex-2, using generator------------------')

        function* generator(obj) {
            const entries = Object.entries(obj);
            for (let element of entries) {
                yield element[1];
            }
        }

        const iterator = generator(obj);
        console.log(iterator.next());
        for (let element of iterator) {
            console.log(element);
        }
        console.log([...obj]);
    }
}
//Example-2:Make Range Function
{
    console.log('Example-2:Make Range Function------------------');

    function* range(start, end, step) {
        let current = start;
        while (current <= end) {
            yield current;
            console.log('did u execute?');
            current += step;
        }
    }

    let iterator = range(1, 8, 2);
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

//Example-3:Generator Control Flow
{
    console.log('Example-3:Generator Control Flow--------------')

    function* generator(a, b) {
        let k = yield a + b;  // k assign at 2nd step, not at 1st step,
        let m = yield a + b + k;
        yield a + b + k + m;
    }

    let gen = generator(10, 20);
    console.log(gen.next());
    console.log(gen.next(50));
    console.log(gen.next(100));
}

//Async/Await, Higher level Abstraction to Generator
{
    console.log("Async/Await, Higher level Abstraction to Generator---")
    //ex-1
    {
        console.log("ex-1 -------------------")
        const takeOrder = (customer) => {
            setTimeout(() => {
                console.log(`take order for ${customer}`)
            }, 1000);
        };

        const processOrder = (customer) => {
            setTimeout(() => {
                console.log(`order processed for ${customer}`);
            }, 1000);
        };

        const completedOrder = (customer) => {
            setTimeout(() => {
                console.log(`completed order for ${customer}`);
            }, 1000);
        };

        function* solution(customer) {
            yield takeOrder(customer);
            yield processOrder(customer);
            yield completedOrder(customer);
        }

        const gen = solution('Sakib');
        gen.next();
        gen.next();
        gen.next();
    }
    //ex-2,using Promise
    {
        console.log("ex-2,using Promise ----------------------")
        const takeOrder = (customer) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(`1.take order for ${customer}`)
                }, 1000);
            })

        };

        const processOrder = (customer) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(`2.order processed for ${customer}`);
                }, 1000);
            })

        };

        const completedOrder = (customer) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(`3.completed order for ${customer}`);
                }, 1000);
            })

        };

        async function* solution1(customer) {
            yield await takeOrder(customer);
            yield await processOrder(customer);
            yield await completedOrder(customer);
        }

        const gen = solution1('Sakib');
        // gen.next().then(({value})=>console.log(value));
        // gen.next().then(({value})=>console.log(value));
        // gen.next().then(({value})=>console.log(value));

        const promises = [gen.next(), gen.next(), gen.next()];
        (async function () {
            for await (let p of promises) {
                console.log(p);
            }
        })()

    }
}

//Async Iterator
{
    console.log('//Async Iterator----------------')
    const myAsyncIterator = {
        async* [Symbol.asyncIterator]() {
            yield 'hello';
            yield 'async';
            yield 'iterator';
        },
    };
    (async () => {
        for await (let x of myAsyncIterator) {
            console.log(x);
        }
    })()
}


