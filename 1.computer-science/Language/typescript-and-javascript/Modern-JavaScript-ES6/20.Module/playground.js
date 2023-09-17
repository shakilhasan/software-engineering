//named import-----------------
import {pi, a, myFunc} from './external.js'; //named import, no need '.js' in react & others libraries
console.log(pi, a);
myFunc();

//alias import
import {pi as varPi, a as varA} from './external.js'; //named import
console.log(varPi, varA);

// import all as test
import * as test from './external.js'; //named import
console.log(test) //get all as object


//default import------------
import external from './external.js'; //default import
console.log(external)

//default & named import at a time ------------
import external1, {pi as myPi, a as myA} from './external.js'; //default import
console.log(external1, myPi, myA)


    //Dynamic Imports
    (async () => {
        if ('somethingIsTrue') {
            // import module for side effects
            await import('./external.js');
        }
    })();



