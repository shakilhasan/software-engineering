//https://refactoring.guru/design-patterns/command/typescript/example#example-0--index-ts
interface Command {
    execute(): void;
}

// ------SimpleCommand-----
class SimpleCommand implements Command {
    constructor(private payload: string) {
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
    constructor(private receiver: Receiver, private a: string, private b: string) {
    }

    public execute(): void {
        console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    }
}

//-------Invoker-------
class Invoker {
    constructor(private onStart: Command, private onFinish: Command) {
    }

    public doSomethingImportant(): void {
        console.log('Invoker: Does anybody want something done before I begin?');
        if (this.isCommand(this.onStart)) this.onStart.execute();
        console.log('\nInvoker: ...doing something really important...\n');
        console.log('Invoker: Does anybody want something done after I finish?');
        if (this.isCommand(this.onFinish)) this.onFinish.execute();

    }

    private isCommand(object: Command): object is Command {
        return object.execute !== undefined;
    }
}

const invoker = new Invoker(new SimpleCommand('Say Hi!'), new ComplexCommand(new Receiver(), 'Send email', 'Save report'));
// const invoker = new Invoker(new ComplexCommand(receiver, 'Send email', 'Save report'),new SimpleCommand('Say Hi!'));

invoker.doSomethingImportant();
