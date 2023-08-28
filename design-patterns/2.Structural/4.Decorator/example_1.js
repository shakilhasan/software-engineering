"use strict";
//https://refactoring.guru/design-patterns/decorator/typescript/example#example-0--index-ts
class ConcreteComponent {
    operation() {
        return 'ConcreteComponent';
    }
}
class Decorator {
    component;
    constructor(component) {
        this.component = component;
    }
    /**
     * The Decorator delegates all work to the wrapped component.
     */
    operation() {
        return this.component.operation();
    }
}
/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
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
function clientCode(component) {
    // ...
    console.log(`RESULT: ${component.operation()}`);
    // ...
}
/**
 * This way the client code can support both simple components...
 */
const simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);
