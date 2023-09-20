"use strict";
//https://refactoring.guru/design-patterns/state/typescript/example#example-0--index-ts
class State {
    context;
    setContext(context) {
        this.context = context;
    }
}
class Context {
    state;
    constructor(state) {
        this.transitionTo(state);
    }
    transitionTo(state) {
        console.log(`Context: Transition to ${state.constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }
    request1() {
        if (this.state)
            this.state.handle1();
    }
    request2() {
        if (this.state)
            this.state.handle2();
    }
}
class ConcreteStateA extends State {
    handle1() {
        console.log('ConcreteStateA handles request1.');
        console.log('ConcreteStateA wants to change the state of the context.');
        if (this.context)
            this.context.transitionTo(new ConcreteStateB());
    }
    handle2() {
        console.log('ConcreteStateA handles request2.');
    }
}
class ConcreteStateB extends State {
    handle1() {
        console.log('ConcreteStateB handles request1.');
    }
    handle2() {
        console.log('ConcreteStateB handles request2.');
        console.log('ConcreteStateB wants to change the state of the context.');
        if (this.context)
            this.context.transitionTo(new ConcreteStateA());
    }
}
//The client code.
const context = new Context(new ConcreteStateA());
context.request1();
context.request2();
