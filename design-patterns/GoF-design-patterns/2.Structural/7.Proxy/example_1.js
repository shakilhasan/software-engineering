"use strict";
class RealSubject {
    request() {
        console.log('RealSubject: Handling request.');
    }
}
class Proxy1 {
    realSubject;
    constructor(realSubject) {
        this.realSubject = realSubject;
    }
    request() {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }
    checkAccess() {
        console.log('Proxy1: Checking access prior to firing a real request.');
        return true;
    }
    logAccess() {
        console.log('Proxy1: Logging the time of request.');
    }
}
function proxyClientCode(subject) {
    subject.request();
}
console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
proxyClientCode(realSubject);
console.log('');
console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy1(realSubject);
proxyClientCode(proxy);
