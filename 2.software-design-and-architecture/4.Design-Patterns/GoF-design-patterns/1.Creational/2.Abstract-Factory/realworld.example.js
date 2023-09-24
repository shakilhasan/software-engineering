"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdEnvironmentFactory = exports.DevEnvironmentFactory = exports.EnvironmentFactory = exports.SentryLogProvider = exports.ConsoleLogProvider = exports.MockFS = exports.RealFS = exports.S3FS = exports.InMemoryMockDB = exports.MySQLDB = exports.LogProvider = exports.FS = exports.DB = void 0;
class DB {
}
exports.DB = DB;
class FS {
}
exports.FS = FS;
class LogProvider {
}
exports.LogProvider = LogProvider;
class MySQLDB extends DB {
    connect() {
        console.log('Connected to MySQL');
    }
}
exports.MySQLDB = MySQLDB;
class InMemoryMockDB extends DB {
    connect() {
        console.log('Mocking DB in memory');
    }
}
exports.InMemoryMockDB = InMemoryMockDB;
class S3FS extends FS {
    readFile(filename) {
        console.log(`Reading file ${filename} from S3`);
    }
}
exports.S3FS = S3FS;
class RealFS extends FS {
    readFile(filename) {
        console.log(`Reading file ${filename} from a real FS`);
    }
}
exports.RealFS = RealFS;
class MockFS extends FS {
    readFile(filename) {
        console.log(`Mocking a read file call to ${filename}`);
    }
}
exports.MockFS = MockFS;
class ConsoleLogProvider extends LogProvider {
    log(message) {
        console.log(`From console: ${message}`);
    }
}
exports.ConsoleLogProvider = ConsoleLogProvider;
class SentryLogProvider extends LogProvider {
    log(message) {
        console.log(`From Sentry: ${message}`);
    }
}
exports.SentryLogProvider = SentryLogProvider;
class EnvironmentFactory {
}
exports.EnvironmentFactory = EnvironmentFactory;
class DevEnvironmentFactory extends EnvironmentFactory {
    getDB() {
        return new InMemoryMockDB();
    }
    getFS() {
        return new MockFS();
    }
    getLogProvider() {
        return new ConsoleLogProvider();
    }
}
exports.DevEnvironmentFactory = DevEnvironmentFactory;
class ProdEnvironmentFactory extends EnvironmentFactory {
    getDB() {
        return new MySQLDB();
    }
    getFS() {
        return new RealFS();
    }
    getLogProvider() {
        return new SentryLogProvider();
    }
}
exports.ProdEnvironmentFactory = ProdEnvironmentFactory;
// client function
function client(environmentFactory) {
    const db = environmentFactory.getDB();
    db.connect();
    const fs = environmentFactory.getFS();
    fs.readFile('document.txt');
    const logProvider = environmentFactory.getLogProvider();
    logProvider.log('hello world');
}
if (process.env.NODE_ENV === 'production')
    client(new ProdEnvironmentFactory());
else
    client(new DevEnvironmentFactory());
