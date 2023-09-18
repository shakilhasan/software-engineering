"use strict";
class AlphabeticalOrderIterator {
    collection;
    position = 0;
    reverse = false;
    constructor(collection, reverse = false) {
        this.collection = collection;
        this.reverse = reverse;
        if (reverse)
            this.position = collection.getCount() - 1;
    }
    rewind() {
        this.position = this.reverse ? this.collection.getCount() - 1 : 0;
    }
    current() {
        return this.collection.getItems()[this.position];
    }
    key() {
        return this.position;
    }
    next() {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }
    valid() {
        if (this.reverse)
            return this.position >= 0;
        return this.position < this.collection.getCount();
    }
}
class WordsCollection {
    items = [];
    getItems() {
        return this.items;
    }
    getCount() {
        return this.items.length;
    }
    addItem(item) {
        this.items.push(item);
    }
    getIterator() {
        return new AlphabeticalOrderIterator(this);
    }
    getReverseIterator() {
        return new AlphabeticalOrderIterator(this, true);
    }
}
const collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');
const iterator = collection.getIterator();
console.log('Straight traversal:');
while (iterator.valid()) {
    console.log(iterator.next());
}
console.log('');
console.log('Reverse traversal:');
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}
