//https://refactoring.guru/design-patterns/proxy/typescript/example#example-0--index-ts
interface Subject {
    request(): void;
}

class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request.');
    }
}

class Proxy1 implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy1: Checking access prior to firing a real request.');
        return true;
    }

    private logAccess(): void {
        console.log('Proxy1: Logging the time of request.');
    }
}

function proxyClientCode(subject: Subject) {
    subject.request();
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
proxyClientCode(realSubject);
console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy1(realSubject);
proxyClientCode(proxy);
