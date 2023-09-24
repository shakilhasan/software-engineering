//https://refactoring.guru/design-patterns/decorator/typescript/example#example-0--index-ts
interface Component1 {
    operation(): string;
}

class ConcreteComponent1 implements Component1 {
    public operation(): string {
        return 'ConcreteComponent1';
    }
}

class Decorator implements Component1 {
    protected component: Component1;

    //  The Decorator delegates all work to the wrapped component.
    constructor(component: Component1) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

//Concrete Decorators call the wrapped object and alter its result in some way.
class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

// client code
function decoratorClientCode(component: Component1) {
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
