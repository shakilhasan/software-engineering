import https from 'node:https';

interface Command {
    execute(): void;
}

class RandomFactDomainServiceReceiver {
    public getRandomFact(): Promise<string> {
        return new Promise((resolve, reject) => {
            https.get('https://uselessfacts.jsph.pl/api/v2/facts/random', (res) => {
                res.on('data', (d) => {
                    const data = JSON.parse(d);
                    resolve(data.text);
                });
            }).on('error', (error) => {
                reject(error);
            });
        });
    }
}

class PrintRandomFactCommand implements Command {
    constructor(protected randomFactDomainServiceReceiver: RandomFactDomainServiceReceiver) {
    }

    public async execute(): Promise<void> {
        console.info(await this.randomFactDomainServiceReceiver.getRandomFact());
    }
}

class CommandInvoker {
    constructor(protected command: Command, protected seconds: number = 5) {
    }

    start(): void {
        setInterval(() => {
            this.command.execute();
        }, this.seconds * 1000);
    }
}

const command = new PrintRandomFactCommand(new RandomFactDomainServiceReceiver());
const commandInvoker = new CommandInvoker(command, 3);
commandInvoker.start();
