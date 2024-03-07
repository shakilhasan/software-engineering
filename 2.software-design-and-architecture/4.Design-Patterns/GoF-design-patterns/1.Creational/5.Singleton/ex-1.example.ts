class Singleton1 {
    private static instances: { [key: string]: Singleton1 } = {};

    protected constructor() {
    }

    public static getInstance(): Singleton1 {
        const currentClass = this.name;
        if (!Singleton1.instances[currentClass]) Singleton1.instances[currentClass] = new this();
        return Singleton1.instances[currentClass];
    }
}

class Example extends Singleton1 {
    private constructor() {
        super();
    }
}

const instance1 = Example.getInstance();
const instance2 = Example.getInstance();

console.log(instance1 === instance2);
