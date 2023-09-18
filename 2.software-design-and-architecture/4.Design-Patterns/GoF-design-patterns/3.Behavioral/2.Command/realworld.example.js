"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_https_1 = __importDefault(require("node:https"));
class RandomFactDomainServiceReceiver {
    getRandomFact() {
        return new Promise((resolve, reject) => {
            node_https_1.default.get('https://uselessfacts.jsph.pl/api/v2/facts/random', (res) => {
                res.on('data', (d) => {
                    const data = JSON.parse(d);
                    const fact = data.text;
                    resolve(fact);
                });
            }).on('error', (error) => {
                reject(error);
            });
        });
    }
}
class PrintRandomFactCommand {
    randomFactDomainServiceReceiver;
    constructor(randomFactDomainServiceReceiver) {
        this.randomFactDomainServiceReceiver = randomFactDomainServiceReceiver;
    }
    async execute() {
        const fact = await this.randomFactDomainServiceReceiver.getRandomFact();
        console.info(fact);
    }
}
class CommandInvoker {
    command;
    seconds;
    constructor(command, seconds = 5) {
        this.command = command;
        this.seconds = seconds;
    }
    start() {
        setInterval(() => {
            this.command.execute();
        }, this.seconds * 1000);
    }
}
const randomFactDomainServiceReceiver = new RandomFactDomainServiceReceiver();
const command = new PrintRandomFactCommand(randomFactDomainServiceReceiver);
const commandInvoker = new CommandInvoker(command, 3);
commandInvoker.start();
