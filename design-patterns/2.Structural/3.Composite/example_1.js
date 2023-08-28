"use strict";
//https://refactoring.guru/design-patterns/composite/typescript/example#example-0--index-ts
class Component {
    parent;
    setParent(parent) {
        this.parent = parent;
    }
    getParent() {
        return this.parent;
    }
    add(component) {
    }
    remove(component) {
    }
    isComposite() {
        return false;
    }
}
class Leaf extends Component {
    operation() {
        return 'Leaf';
    }
}
class Composite extends Component {
    children = [];
    add(component) {
        this.children.push(component);
        component.setParent(this);
    }
    remove(component) {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    }
    isComposite() {
        return true;
    }
    operation() {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }
        return `Branch(${results.join('+')})`;
    }
}
function compositeClientCode(component) {
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
function compositeClientCode2(component1, component2) {
    // ...
    if (component1.isComposite()) {
        component1.add(component2);
    }
    console.log(`RESULT: ${component1.operation()}`);
    // ...
}
console.log('Client: I don\'t need to check the components classes even when managing the tree:');
compositeClientCode2(tree, simple);
