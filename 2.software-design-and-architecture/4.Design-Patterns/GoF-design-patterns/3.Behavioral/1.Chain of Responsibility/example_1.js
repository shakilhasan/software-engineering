"use strict";
class AbstractHandler {
    nextHandler;
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(request) {
        if (this.nextHandler)
            return this.nextHandler.handle(request);
        return null;
    }
}
class MonkeyHandler extends AbstractHandler {
    handle(request) {
        if (request === 'Banana')
            return `Monkey: I'll eat the ${request}.`;
        return super.handle(request);
    }
}
class SquirrelHandler extends AbstractHandler {
    handle(request) {
        if (request === 'Nut')
            return `Squirrel: I'll eat the ${request}.`;
        return super.handle(request);
    }
}
class DogHandler extends AbstractHandler {
    handle(request) {
        if (request === 'MeatBall')
            return `Dog: I'll eat the ${request}.`;
        return super.handle(request);
    }
}
function CORclientCode(handler) {
    const foods = ['Nut', 'Banana', 'Cup of coffee'];
    for (const food of foods) {
        console.log(`Client: Who wants a ${food}?`);
        const result = handler.handle(food);
        if (result)
            console.log(`  ${result}`);
        else
            console.log(`  ${food} was left untouched.`);
    }
}
const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();
monkey.setNext(squirrel).setNext(dog);
console.log('Chain: Monkey > Squirrel > Dog\n');
CORclientCode(monkey);
console.log('');
console.log('Subchain: Squirrel > Dog\n');
CORclientCode(squirrel);
