"use strict";
//https://refactoring.guru/design-patterns/singleton/typescript/example
class Singleton {
    static instance;
    constructor() {
    }
    static getInstance() {
        if (!Singleton.instance)
            Singleton.instance = new Singleton();
        return Singleton.instance;
    }
    someBusinessLogic() {
        // ...
    }
}
function singletonClientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();
    if (s1 === s2)
        console.log('Singleton works, both variables contain the same instance.');
    else
        console.log('Singleton failed, variables contain different instances.');
}
singletonClientCode();
