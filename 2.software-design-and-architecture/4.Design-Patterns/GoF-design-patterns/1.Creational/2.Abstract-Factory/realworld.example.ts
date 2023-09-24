export abstract class DB {
    public abstract connect():any;
}

export abstract class FS {
    public abstract readFile(filename: string):any;
}

export abstract class LogProvider {
    public abstract log(message: string):any;
}

export class MySQLDB extends DB {
    public connect() {
        console.log('Connected to MySQL');
    }
}

export class InMemoryMockDB extends DB {
    public connect() {
        console.log('Mocking DB in memory');
    }
}

export class S3FS extends FS {
    public readFile(filename: string) {
        console.log(`Reading file ${filename} from S3`);
    }
}

export class RealFS extends FS {
    public readFile(filename: string) {
        console.log(`Reading file ${filename} from a real FS`);
    }
}

export class MockFS extends FS {
    public readFile(filename: string) {
        console.log(`Mocking a read file call to ${filename}`);
    }
}

export class ConsoleLogProvider extends LogProvider {
    public log(message: string) {
        console.log(`From console: ${message}`);
    }
}

export class SentryLogProvider extends LogProvider {
    public log(message: string) {
        console.log(`From Sentry: ${message}`);
    }
}

export abstract class EnvironmentFactory {
    public abstract getDB(): DB;

    public abstract getFS(): FS;

    public abstract getLogProvider(): LogProvider;
}

export class DevEnvironmentFactory extends EnvironmentFactory {
    public getDB(): DB {
        return new InMemoryMockDB();
    }

    public getFS(): FS {
        return new MockFS();
    }

    public getLogProvider(): LogProvider {
        return new ConsoleLogProvider();
    }
}

export class ProdEnvironmentFactory extends EnvironmentFactory {
    public getDB(): DB {
        return new MySQLDB();
    }

    public getFS(): FS {
        return new RealFS();
    }

    public getLogProvider(): LogProvider {
        return new SentryLogProvider();
    }
}

// client function
function client(environmentFactory: EnvironmentFactory) {
    const db = environmentFactory.getDB();
    db.connect();

    const fs = environmentFactory.getFS();
    fs.readFile('document.txt');

    const logProvider = environmentFactory.getLogProvider();
    logProvider.log('hello world');
}

if (process.env.NODE_ENV === 'production') client(new ProdEnvironmentFactory());
else client(new DevEnvironmentFactory());
