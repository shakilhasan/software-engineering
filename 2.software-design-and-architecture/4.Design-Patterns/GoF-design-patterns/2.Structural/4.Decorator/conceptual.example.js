"use strict";
class ConcreteComponent1 {
    operation() {
        return 'ConcreteComponent1';
    }
}
class Decorator {
    component;
    //  The Decorator delegates all work to the wrapped component.
    constructor(component) {
        this.component = component;
    }
    operation() {
        return this.component.operation();
    }
}
//Concrete Decorators call the wrapped object and alter its result in some way.
class ConcreteDecoratorA extends Decorator {
    operation() {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}
class ConcreteDecoratorB extends Decorator {
    operation() {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}
// client code
function decoratorClientCode(component) {
    console.log(`RESULT: ${component.operation()}`);
}
const simple1 = new ConcreteComponent1();
console.log('Client: I\'ve got a simple component:');
decoratorClientCode(simple1);
console.log('');
const decorator1 = new ConcreteDecoratorA(simple1);
console.log('Client: Now I\'ve got a simple decorated component:');
decoratorClientCode(decorator1);
console.log('');
const decorator2 = new ConcreteDecoratorB(decorator1);
// console.log('decorator2- ', decorator2)
console.log('Client: Now I\'ve got a nested decorated component:');
decoratorClientCode(decorator2);
