"use strict";
class ConcreteSubject {
    state = 0;
    observers = [];
    attach(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist)
            return console.log('Subject1: Observer has been attached already.');
        console.log('Subject1: Attached an observer.');
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1)
            return console.log('Subject1: Nonexistent observer.');
        this.observers.splice(observerIndex, 1);
        console.log('Subject1: Detached an observer.');
    }
    notify() {
        console.log('Subject1: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    someBusinessLogic() {
        console.log('\nSubject1: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log(`Subject1: My state has just changed to: ${this.state}`);
        this.notify();
    }
}
class ConcreteObserverA {
    update(subject) {
        if (subject instanceof ConcreteSubject && subject.state < 3)
            console.log('ConcreteObserverA: Reacted to the event.');
    }
}
class ConcreteObserverB {
    update(subject) {
        if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2))
            console.log('ConcreteObserverB: Reacted to the event.');
    }
}
//The client code.
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserverA();
subject.attach(observer1);
const observer2 = new ConcreteObserverB();
subject.attach(observer2);
subject.someBusinessLogic();
subject.someBusinessLogic();
subject.detach(observer2);
subject.someBusinessLogic();
