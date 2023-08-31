"use strict";
class SimpleCommand {
    payload;
    constructor(payload) {
        this.payload = payload;
    }
    execute() {
        console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
    }
}
class ComplexCommand {
    receiver;
    a;
    b;
    constructor(receiver, a, b) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }
    execute() {
        console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    }
}
class Receiver {
    doSomething(a) {
        console.log(`Receiver: Working on (${a}.)`);
    }
    doSomethingElse(b) {
        console.log(`Receiver: Also working on (${b}.)`);
    }
}
class Invoker {
    onStart;
    onFinish;
    constructor(onStart, onFinish) {
        this.onStart = onStart;
        this.onFinish = onFinish;
    }
    setOnStart(command) {
        this.onStart = command;
    }
    setOnFinish(command) {
        this.onFinish = command;
    }
    doSomethingImportant() {
        console.log('Invoker: Does anybody want something done before I begin?');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
        console.log('Invoker: ...doing something really important...');
        console.log('Invoker: Does anybody want something done after I finish?');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }
    isCommand(object) {
        return object.execute !== undefined;
    }
}
const receiver = new Receiver();
const invoker = new Invoker(new SimpleCommand('Say Hi!'), new ComplexCommand(receiver, 'Send email', 'Save report'));
// invoker.setOnStart(new SimpleCommand('Say Hi!'));
// invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));
invoker.doSomethingImportant();
