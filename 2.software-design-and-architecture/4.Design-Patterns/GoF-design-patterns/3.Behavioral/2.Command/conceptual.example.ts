//https://refactoring.guru/design-patterns/command/typescript/example#example-0--index-ts
interface Command {
    execute(): void;
}
// ------SimpleCommand-----
class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
    }
}
// -------ComplexCommand---------
class Receiver {
    public doSomething(a: string): void {
        console.log(`Receiver: Working on (${a}.)`);
    }

    public doSomethingElse(b: string): void {
        console.log(`Receiver: Also working on (${b}.)`);
    }
}

class ComplexCommand implements Command {
    private receiver: Receiver;
    private a: string;
    private b: string;

    constructor(receiver: Receiver, a: string, b: string) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }

    public execute(): void {
        console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    }
}
//-------Invoker-------
class Invoker {
    private onStart: Command;
    private onFinish: Command;

    constructor(onStart: Command, onFinish: Command) {
        this.onStart = onStart;
        this.onFinish = onFinish;
    }

    public doSomethingImportant(): void {
        console.log('Invoker: Does anybody want something done before I begin?');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }

        console.log('\nInvoker: ...doing something really important...\n');

        console.log('Invoker: Does anybody want something done after I finish?');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }

    private isCommand(object: any): object is Command {
        return object.execute !== undefined;
    }
}

const receiver = new Receiver();
const invoker = new Invoker(new SimpleCommand('Say Hi!'), new ComplexCommand(receiver, 'Send email', 'Save report'));
// const invoker = new Invoker(new ComplexCommand(receiver, 'Send email', 'Save report'),new SimpleCommand('Say Hi!'));

invoker.doSomethingImportant();
