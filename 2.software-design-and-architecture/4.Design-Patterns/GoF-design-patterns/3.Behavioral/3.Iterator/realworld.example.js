"use strict";
class Contact {
    name;
    contacts = [];
    iteratorFirstLevelIndex = 0;
    iteratorSecondLevelIndex = 0;
    constructor(name) {
        this.name = name;
    }
    addContact(contact) {
        this.contacts.push(contact);
    }
    // @ts-ignore
    next() {
        const done = this.iteratorFirstLevelIndex === this.contacts.length;
        if (done)
            return { value: null, done: true };
        const firstLevelContact = this.contacts[this.iteratorFirstLevelIndex];
        const value = firstLevelContact.contacts[this.iteratorSecondLevelIndex];
        if (this.iteratorSecondLevelIndex === firstLevelContact.contacts.length - 1) {
            this.iteratorFirstLevelIndex += 1;
            this.iteratorSecondLevelIndex = 0;
        }
        else
            this.iteratorSecondLevelIndex += 1;
        return { value, done };
    }
    // @ts-ignore
    [Symbol.iterator]() {
        return this;
    }
}
const superboss = new Contact('Super Boss');
const boss1 = new Contact('Boss One');
const boss2 = new Contact('Boss Two');
const boss3 = new Contact('Boss Three');
const employee11 = new Contact('Employee One One');
const employee12 = new Contact('Employee One Two');
const employee13 = new Contact('Employee One Three');
const employee21 = new Contact('Employee Two One');
const employee22 = new Contact('Employee Two Two');
const employee23 = new Contact('Employee Two Three');
const employee31 = new Contact('Employee Three One');
const employee32 = new Contact('Employee Three Two');
const employee33 = new Contact('Employee Three Three');
const tooLowInTheTree = new Contact('Contact too low in the tree');
superboss.addContact(boss1);
superboss.addContact(boss2);
superboss.addContact(boss3);
boss1.addContact(employee11);
boss1.addContact(employee12);
boss1.addContact(employee13);
boss2.addContact(employee21);
boss2.addContact(employee22);
boss2.addContact(employee23);
boss3.addContact(employee31);
boss3.addContact(employee32);
boss3.addContact(employee33);
employee33.addContact(tooLowInTheTree);
for (const contact of superboss) {
    console.log(contact.name);
}
