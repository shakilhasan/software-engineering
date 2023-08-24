"use strict";
// TODO: modified to fix ts-errors
//https://refactoring.guru/design-patterns/prototype/typescript/example#example-0--index-ts
class Prototype {
    primitive;
    component;
    circularReference;
    constructor({ primitive = null, component = null, circularReference = null } = {}) {
        this.primitive = primitive;
        this.component = component;
        this.circularReference = circularReference;
    }
    clone() {
        const clone = Object.create(this);
        clone.component = Object.create(this.component);
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };
        return clone;
    }
}
class ComponentWithBackReference {
    prototype;
    constructor(prototype) {
        this.prototype = prototype;
    }
}
/**
 * The client code.
 */
function prototypeClientCode() {
    const p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();
    p1.circularReference = new ComponentWithBackReference(p1);
    const p2 = p1.clone();
    if (p1.primitive === p2.primitive) {
        console.log('Primitive field values have been carried over to a clone. Yay!');
    }
    else {
        console.log('Primitive field values have not been copied. Booo!');
    }
    if (p1.component === p2.component) {
        console.log('Simple component has not been cloned. Booo!');
    }
    else {
        console.log('Simple component has been cloned. Yay!');
    }
    if (p1.circularReference === p2.circularReference) {
        console.log('Component with back reference has not been cloned. Booo!');
    }
    else {
        console.log('Component with back reference has been cloned. Yay!');
    }
    if (p1.circularReference.prototype === p2.circularReference?.prototype) {
        console.log('Component with back reference is linked to original object. Booo!');
    }
    else {
        console.log('Component with back reference is linked to the clone. Yay!');
    }
}
prototypeClientCode();
