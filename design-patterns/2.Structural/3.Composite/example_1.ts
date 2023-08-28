//https://refactoring.guru/design-patterns/composite/typescript/example#example-0--index-ts
abstract class Component {
    protected parent!: Component | null;

    public setParent(parent: Component | null) {
        this.parent = parent;
    }

    public getParent(): Component | null {
        return this.parent;
    }

    public add(component: Component): void {
    }

    public remove(component: Component): void {
    }

    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): string;
}

class Leaf extends Component {
    public operation(): string {
        return 'Leaf';
    }
}

class Composite extends Component {
    protected children: Component[] = [];

    public add(component: Component): void {
        this.children.push(component);
        component.setParent(this);
    }

    public remove(component: Component): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);

        component.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public operation(): string {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }

        return `Branch(${results.join('+')})`;
    }
}

function compositeClientCode(component: Component) {
    // ...

    console.log(`RESULT: ${component.operation()}`);

    // ...
}

const simple = new Leaf();
console.log('Client: I\'ve got a simple component:');
compositeClientCode(simple);
console.log('');

/**
 * ...as well as the complex composites.
 */
const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log('Client: Now I\'ve got a composite tree:');
compositeClientCode(tree);
console.log('');


function compositeClientCode2(component1: Component, component2: Component) {
    // ...
    if (component1.isComposite()) {
        component1.add(component2);
    }
    console.log(`RESULT: ${component1.operation()}`);
    // ...
}

console.log('Client: I don\'t need to check the components classes even when managing the tree:');
compositeClientCode2(tree, simple);
