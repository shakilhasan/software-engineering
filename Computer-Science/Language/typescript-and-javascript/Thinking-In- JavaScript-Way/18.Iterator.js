//iterable
// built-in iterables: String, Array, TypedArray, Map, and Set
// non-iterable: Object
{
    const arr = [1, 2, 3];
    const obj = {
        'one': 1, 'two': 2, 'three': 3
    }
    console.dir(arr);//iterable,has Symbol.iterator prototype
    console.dir(obj);//not iterable, no Symbol.iterator prototype
    for (let element of arr) {
        console.log(element);
    }
}

//Iterable Protocol, Rules to be Iterable
{
    console.log('Iterable Protocol, Rules to be Iterable ---------------------')
    const arr = [1, 2, 3];
    //rule-1:Iterable to be an object and must have Symbol.iterator function property
    {
        console.dir(arr);//iterable, object and has Symbol.iterator prototype
    }
    //rule-2: function must return an iterator
    {
        let iterator = arr[Symbol.iterator](); //return an iterator
    }
}

//Iterator Protocol, Rules to be Iterator
{
    console.log('Iterator Protocol, Rules to be Iterator ---------------------')
    const arr = [1, 2, 3];
    //rule-1: muse be a js object
    {
        let iterator = arr[Symbol.iterator]();
        console.dir(iterator); //iterator is an object
    }
    //rule-2: need to implement a next() method
    {
        let iterator = arr[Symbol.iterator]();
        console.dir(iterator); // has next() method
        console.dir(iterator.next());
        console.dir(iterator.next());
        console.dir(iterator.next());
        console.dir(iterator.next());
    }
    //rule-2: next() must return an object with done:Boolean and a value
    {
        let iterator = arr[Symbol.iterator]();
        console.dir(iterator.next()); //next  return Object {value: 1, done: false}
    }
}

// make custom iterator
{
    console.log('make custom iterator---------------------')
    //ex-1: change spread operator,change in build-in object prototype, not recommendation, just for practice
    {
        console.log('ex-1---------------------')
        String.prototype[Symbol.iterator] = function () {
            let count = this.length;
            return {
                next() {
                    if (count > 0) {
                        count--;
                        return {done: false, value: 'JS'};
                    }
                    return {done: true}
                },
            };
        };
        console.log([...'hello'])  //Spread Operator is like loop
        console.log([...'bangladesh'])  //Spread Operator is like loop
    }

    //ex-2: our own custom iterable & iterator
    {
        console.log('ex-2---------------------')

        function range(start, end, step) {
            let current = start;
            return {
                [Symbol.iterator]: function () {
                    return {
                        next() {
                            let result;
                            if (current <= end) {
                                result = {
                                    done: false, value: current
                                }
                                current += step
                                return result;
                            }

                            return {
                                done: true,
                            };
                        }
                    }
                }
            }
        }

        console.log([...range(1, 30, 2)]);
    }
}