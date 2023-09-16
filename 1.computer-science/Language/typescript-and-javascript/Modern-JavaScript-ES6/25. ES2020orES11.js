//features of ES11
//from ES11 we can use globalThis in both browser and nodeJS
{
    globalThis.setTimeout(() => console.log('hello'), 100)
    // (window === globalThis) //true in browser
    // (global === globalThis) //true in nodeJS
}

//BigInt
{
    console.log('-------------')
    let largestNumber = Number.MIN_SAFE_INTEGER;
    largestNumber += 1;
    largestNumber = BigInt(largestNumber) + 1n;

    // BigInt(10)===10n //true
    // 10==10n //true
    // 10===10n //false

    console.log(largestNumber)
}
const language = {
    name: 'javascript',
    founder: 'Brendan Eich',
    library: {
        react: {
            company: 'Facebook',
        }
    }
}
const colors = ['red', 'green', 'blue']
//Optional Chaining (?.)
{
    console.log('-------------')
    let company = language?.library?.react?.company
    console.log(company)

    console.log(colors?.[0]) //for array also
}

//Nullish Coalescing Operator (??)
{
    console.log('-------------')
    let language;
// let language='';
    console.log(language || 'javascript'); //if left side is falsy value then return right side
    console.log(language ?? 'javascript'); //if left side is null or undefined then return right side
}

// promise.allSettled()  // similar as promise.all but return an object
{
    console.log('-------------')
    const promise1 = Promise.resolve(`Promise 1 resolved`);
    const promise2 = Promise.reject(`Promise 2 reject`);

    Promise.allSettled([promise1, promise2]).then((res) => {   //return result as Array
        console.log(res);
    });
}

//String.prototype.matchAll(), like update version of match, Return an iterator
{
    console.log('-------------')
    const regexp = /t(e)(st(\d?))/g;
    const str = 'test1test2';

    const array = [...str.matchAll(regexp)];

    console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

    console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]
}