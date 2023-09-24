"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.TextBox = exports.Drawing = exports.Title = exports.Document = exports.ComponentPrototype = void 0;
class ComponentPrototype {
    clone() {
        return { ...this };
    }
}
exports.ComponentPrototype = ComponentPrototype;
class Document extends ComponentPrototype {
    components = [];
    clone() {
        const clonedDocument = new Document();
        clonedDocument.components = this.components.map(c => c.clone());
        return clonedDocument;
    }
    add(component) {
        this.components.push(component);
    }
}
exports.Document = Document;
//Some components to add to a document
class Title extends ComponentPrototype {
    text;
    constructor(text) {
        super();
        this.text = text;
    }
    setText(text) {
        this.text = text;
    }
}
exports.Title = Title;
class Drawing extends ComponentPrototype {
    shape;
    constructor(shape) {
        super();
        this.shape = shape;
    }
    setShape(shape) {
        this.shape = shape;
    }
}
exports.Drawing = Drawing;
class TextBox extends ComponentPrototype {
    text;
    constructor(text) {
        super();
        this.text = text;
    }
    setText(text) {
        this.text = text;
    }
}
exports.TextBox = TextBox;
class Link extends ComponentPrototype {
    text;
    url;
    constructor(text, url) {
        super();
        this.text = text;
        this.url = url;
    }
    setText(text) {
        this.text = text;
    }
    setUrl(url) {
        this.url = url;
    }
}
exports.Link = Link;
// The client code.
const document = new Document();
const title = new Title('Example Domain');
const textbox = new TextBox('This domain is for use in illustrative examples');
document.add(title);
document.add(new Drawing('line'));
document.add(textbox);
document.add(new Link('example.com', 'https://example.com/'));
const clonedDocument = document.clone();
title.setText('New title for the original document');
textbox.setText('New textbox text for the original document');
console.log('document is:');
console.log(document);
console.log('clonedDocument is:');
console.log(clonedDocument);
