abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}
interface Product {
    operation(): string;
}
class Product1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}
class Creator1 extends Creator {
    public factoryMethod(): Product {
        return new Product1();
    }
}
class Product2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}
class Creator2 extends Creator {
    public factoryMethod(): Product {
        return new Product2();
    }
}

function clientCode(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1.');
clientCode(new Creator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new Creator2());
