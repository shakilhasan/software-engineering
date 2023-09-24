export abstract class DBConnectionFactory {
    public abstract createDBConnection(): DBConnection;
}

export class MongoConnectionFactory extends DBConnectionFactory {
    public createDBConnection() {
        return new MongoConnection();
    }
}

export class RedisConnectionFactory extends DBConnectionFactory {
    public createDBConnection(): DBConnection {
        return new RedisConnection();
    }
}

export abstract class DBConnection {
    provider: string | undefined;

    public connect() {
        console.log(`Connected to ${this.provider}`);
    }
}

export class MongoConnection extends DBConnection {
    provider: string;

    constructor() {
        super();
        this.provider = 'Mongo DB';
    }
}

export class RedisConnection extends DBConnection {
    provider: string;

    constructor() {
        super();
        this.provider = 'Redis';
    }
}

//client function
function main(dbConnectionFactory: DBConnectionFactory) {
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
