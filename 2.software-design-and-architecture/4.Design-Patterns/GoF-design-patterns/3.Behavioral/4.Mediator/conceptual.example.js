"use strict";
class ConcreteMediator {
    component1;
    component2;
    constructor(c1, c2) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
    }
    notify(sender, event) {
        if (event === 'A') {
            console.log('Mediator reacts on A and triggers following operations:');
            this.component2.doC();
        }
        if (event === 'D') {
            console.log('Mediator reacts on D and triggers following operations:');
            this.component1.doB();
            this.component2.doC();
        }
    }
}
class BaseComponent {
    mediator;
    constructor(mediator) {
        this.mediator = mediator;
    }
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class Mediator_Component1 extends BaseComponent {
    doA() {
        console.log('Mediator_Component 1 does A.');
        this.mediator.notify(this, 'A');
    }
    doB() {
        console.log('Mediator_Component 1 does B.');
        this.mediator.notify(this, 'B');
    }
}
class Mediator_Component2 extends BaseComponent {
    doC() {
        console.log('Mediator_Component 2 does C.');
        this.mediator.notify(this, 'C');
    }
    doD() {
        console.log('Mediator_Component 2 does D.');
        this.mediator.notify(this, 'D');
    }
}
//The client code.
const c1 = new Mediator_Component1();
const c2 = new Mediator_Component2();
const mediator = new ConcreteMediator(c1, c2);
console.log('Client triggers operation A.');
c1.doA();
console.log('');
console.log('Client triggers operation D.');
c2.doD();
