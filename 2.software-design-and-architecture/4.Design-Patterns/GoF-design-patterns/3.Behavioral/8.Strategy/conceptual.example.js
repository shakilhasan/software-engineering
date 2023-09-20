"use strict";
//https://refactoring.guru/design-patterns/strategy/typescript/example#example-0--index-ts
class Context {
    strategy;
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    doSomeBusinessLogic() {
        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    }
}
class ConcreteStrategyA {
    doAlgorithm(data) {
        return data.sort();
    }
}
class ConcreteStrategyB {
    doAlgorithm(data) {
        return data.reverse();
    }
}
const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBusinessLogic();
console.log('');
console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();
