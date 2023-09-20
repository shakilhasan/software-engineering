//https://refactoring.guru/design-patterns/strategy/typescript/example#example-0--index-ts
class Context_8 {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public doSomeBusinessLogic(): void {
        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    }
}

interface Strategy {
    doAlgorithm(data: string[]): string[];
}

class ConcreteStrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

const context_8 = new Context_8(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context_8.doSomeBusinessLogic();
console.log('');
console.log('Client: Strategy is set to reverse sorting.');
context_8.setStrategy(new ConcreteStrategyB());
context_8.doSomeBusinessLogic();
