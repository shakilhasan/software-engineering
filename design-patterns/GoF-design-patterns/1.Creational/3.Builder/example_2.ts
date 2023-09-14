// TODO: generated from ChatGPT-3.5, may contain mistakes
class BuilderProduct {
    private readonly name: string;
    private readonly price: number;
    private readonly color: string;

    constructor(name: string, price: number, color: string) {
        this.name = name;
        this.price = price;
        this.color = color;
    }

    getInfo(): string {
        return `BuilderProduct: ${this.name}, Price: ${this.price}, Color: ${this.color}`;
    }
}

class ProductBuilder {
    private name: string;
    private price: number;
    private color: string;
    constructor({name='',price=0,color=''}) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
    setName(name: string): ProductBuilder {
        this.name = name;
        return this;
    }

    setPrice(price: number): ProductBuilder {
        this.price = price;
        return this;
    }

    setColor(color: string): ProductBuilder {
        this.color = color;
        return this;
    }

    build(): BuilderProduct {
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
