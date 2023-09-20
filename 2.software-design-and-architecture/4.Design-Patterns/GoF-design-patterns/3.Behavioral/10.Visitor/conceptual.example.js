"use strict";
class ConcreteComponentA {
    accept(visitor) {
        visitor.visitConcreteComponentA(this);
    }
    exclusiveMethodOfConcreteComponentA() {
        return 'A';
    }
}
class ConcreteComponentB {
    accept(visitor) {
        visitor.visitConcreteComponentB(this);
    }
    specialMethodOfConcreteComponentB() {
        return 'B';
    }
}
class ConcreteVisitor1 {
    visitConcreteComponentA(element) {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`);
    }
    visitConcreteComponentB(element) {
        console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`);
    }
}
class ConcreteVisitor2 {
    visitConcreteComponentA(element) {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`);
    }
    visitConcreteComponentB(element) {
        console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor2`);
    }
}
//client code
function clientCode_10(components, visitor) {
    for (const component of components) {
        component.accept(visitor);
    }
}
const components = [
    new ConcreteComponentA(),
    new ConcreteComponentB(),
];
console.log('The client code works with all visitors via the base Visitor interface:');
const visitor1 = new ConcreteVisitor1();
clientCode_10(components, visitor1);
console.log('');
console.log('It allows the same client code to work with different types of visitors:');
const visitor2 = new ConcreteVisitor2();
clientCode_10(components, visitor2);
