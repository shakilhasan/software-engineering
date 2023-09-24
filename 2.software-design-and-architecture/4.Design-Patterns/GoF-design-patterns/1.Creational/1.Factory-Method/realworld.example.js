"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisConnection = exports.MongoConnection = exports.DBConnection = exports.RedisConnectionFactory = exports.MongoConnectionFactory = exports.DBConnectionFactory = void 0;
class DBConnectionFactory {
}
exports.DBConnectionFactory = DBConnectionFactory;
class MongoConnectionFactory extends DBConnectionFactory {
    createDBConnection() {
        return new MongoConnection();
    }
}
exports.MongoConnectionFactory = MongoConnectionFactory;
class RedisConnectionFactory extends DBConnectionFactory {
    createDBConnection() {
        return new RedisConnection();
    }
}
exports.RedisConnectionFactory = RedisConnectionFactory;
class DBConnection {
    provider;
    connect() {
        console.log(`Connected to ${this.provider}`);
    }
}
exports.DBConnection = DBConnection;
class MongoConnection extends DBConnection {
    provider;
    constructor() {
        super();
        this.provider = 'Mongo DB';
    }
}
exports.MongoConnection = MongoConnection;
class RedisConnection extends DBConnection {
    provider;
    constructor() {
        super();
        this.provider = 'Redis';
    }
}
exports.RedisConnection = RedisConnection;
//client function
function main(dbConnectionFactory) {
    const dbConnection = dbConnectionFactory.createDBConnection();
    dbConnection.connect();
}
switch (process.env.DB) {
    case 'Mongo':
        main(new MongoConnectionFactory());
        break;
    case 'Redis':
        main(new RedisConnectionFactory());
        break;
    default:
        console.error('Unknown DB');
}
