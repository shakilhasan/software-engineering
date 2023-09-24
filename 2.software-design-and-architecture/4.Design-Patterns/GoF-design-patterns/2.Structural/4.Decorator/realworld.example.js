"use strict";
class UserController {
    process(req) {
        const users = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Alice' },
        ];
        const response = { status: 200, data: {} };
        if (req.method === 'GET')
            response.data = users;
        else {
            response.status = 400;
            response.data = { message: 'Bad request' };
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(response);
            }, 200);
        });
    }
}
class Decorator {
    controller;
    constructor(controller) {
        this.controller = controller;
    }
    process(req) {
        return this.controller.process(req);
    }
}
class TelemetryDecorator extends Decorator {
    async process(req) {
        const start = new Date().getTime();
        const result = await super.process(req);
        const end = new Date().getTime();
        const time = end - start;
        //If you want, you can save this telemetry data in a log file
        console.log(`${req.url} ${req.method} => ${time}ms`);
        return result;
    }
}
const userController = new TelemetryDecorator(new UserController());
userController.process({ url: '/users', method: 'GET' });
