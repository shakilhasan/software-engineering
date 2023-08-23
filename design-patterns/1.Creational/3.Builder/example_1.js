"use strict";
class BuilderProduct1 {
    parts = [];
    listParts() {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}
class ConcreteBuilder1 {
    product;
    constructor() {
        this.product = new BuilderProduct1();
        // this.reset();
    }
    reset() {
        this.product = new BuilderProduct1();
    }
    producePartA() {
        this.product.parts.push('PartA1');
    }
    producePartB() {
        this.product.parts.push('PartB1');
    }
    producePartC() {
        this.product.parts.push('PartC1');
    }
    getProduct() {
        const result = this.product;
        this.reset();
        return result;
    }
}
class Director {
    builder;
    constructor(builder) {
        this.builder = builder;
    }
    // public setBuilder(builder: Builder): void {
    //     this.builder = builder;
    // }
    buildMinimalViableProduct() {
        this.builder.producePartA();
    }
    buildFullFeaturedProduct() {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}
function clientCode(director) {
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
