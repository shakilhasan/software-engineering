"use strict";
// TODO: generated from ChatGPT-3.5, may contain mistakes
class BuilderProduct {
    name;
    price;
    color;
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
    getInfo() {
        return `BuilderProduct: ${this.name}, Price: ${this.price}, Color: ${this.color}`;
    }
}
class ProductBuilder {
    name;
    price;
    color;
    constructor({ name = '', price = 0, color = '' }) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setPrice(price) {
        this.price = price;
        return this;
    }
    setColor(color) {
        this.color = color;
        return this;
    }
    build() {
        return new BuilderProduct(this.name, this.price, this.color);
    }
}
// Usage
const builderProduct = new ProductBuilder({})
    .setName('Laptop')
    .setPrice(1000)
    .setColor('Silver')
    .build();
console.log(builderProduct.getInfo()); // Output: BuilderProduct: Laptop, Price: 1000, Color: Silver
