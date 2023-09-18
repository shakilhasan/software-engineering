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
                    const fact = data.text;
                    resolve(fact);
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
        const fact = await this.randomFactDomainServiceReceiver.getRandomFact();
        console.info(fact);
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

const randomFactDomainServiceReceiver = new RandomFactDomainServiceReceiver();
const command = new PrintRandomFactCommand(randomFactDomainServiceReceiver);
const commandInvoker = new CommandInvoker(command, 3);

commandInvoker.start();
