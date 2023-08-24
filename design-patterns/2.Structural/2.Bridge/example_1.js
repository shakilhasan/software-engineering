"use strict";
class Abstraction {
    implementation;
    constructor(implementation) {
        this.implementation = implementation;
    }
    operation() {
        const result = this.implementation.operationImplementation();
        return `Abstraction: Base operation with:\n${result}`;
    }
}
class ExtendedAbstraction extends Abstraction {
    operation() {
        const result = this.implementation.operationImplementation();
        return `ExtendedAbstraction: Extended operation with:\n${result}`;
    }
}
class ConcreteImplementationA {
    operationImplementation() {
        return 'ConcreteImplementationA: Here\'s the result on the platform A.';
    }
}
class ConcreteImplementationB {
    operationImplementation() {
        return 'ConcreteImplementationB: Here\'s the result on the platform B.';
    }
}
function bridgeClientCode(abstraction) {
    // ..
    console.log(abstraction.operation());
    // ..
}
let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
bridgeClientCode(abstraction);
console.log('');
implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
bridgeClientCode(abstraction);
