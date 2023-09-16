// modified for fix issue
//https://refactoring.guru/design-patterns/builder/typescript/example#example-0--index-ts
interface Builder {
    producePartA(): void;

    producePartB(): void;

    producePartC(): void;
}

class BuilderProduct1 {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}

class ConcreteBuilder1 implements Builder {
    private product: BuilderProduct1;

    constructor() {
        this.product = new BuilderProduct1();
        // this.reset();
    }

    public reset(): void {
        this.product = new BuilderProduct1();
    }

    public producePartA(): void {
        this.product.parts.push('PartA1');
    }

    public producePartB(): void {
        this.product.parts.push('PartB1');
    }

    public producePartC(): void {
        this.product.parts.push('PartC1');
    }

    public getProduct(): BuilderProduct1 {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Director {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    // public setBuilder(builder: Builder): void {
    //     this.builder = builder;
    // }

    public buildMinimalViableProduct(): void {
        this.builder.producePartA();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}

function clientCode(director: Director) {


    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    // Remember, the Builder pattern can be used without a Director class.
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}

const builder = new ConcreteBuilder1();
// director.setBuilder(builder);
const director = new Director(builder);
clientCode(director);
