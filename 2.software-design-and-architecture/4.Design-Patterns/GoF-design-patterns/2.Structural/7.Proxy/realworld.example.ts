interface WeatherService {
    request(): Promise<WeatherForecast | undefined>;
}

interface WeatherForecast {
    avgTemperature: number;
    maxPrecipitationProbability: number;
}

//The real service emulates a network request to an external service with a 1 second delay
class RealWeatherServiceSDK implements WeatherService {
    public async request(): Promise<WeatherForecast | undefined> {
        const randomWeatherForecast = {
            avgTemperature: Math.random() * 35,
            maxPrecipitationProbability: Math.random() * 100,
        };

        return new Promise((resolve) => {
            setTimeout(() => resolve(randomWeatherForecast), 1000);
        });
    }
}

class ProxyWeatherService implements WeatherService {
    private cachedResponse: WeatherForecast | undefined;
    private cacheDate: Date | undefined;
    private expirationTimeInMillis = 24 * 60 * 60 * 1000;

    constructor(private realWeatherService: WeatherService) {
    }

    public async request(): Promise<WeatherForecast | undefined> {
        console.log(`Requesting forecast on date ${new Date().toISOString()}.`);
        const initialTime = Date.now();
        if (this.isCacheExpired()) {
            console.log('Invalid cache. Calling real weather service...');
            this.setCache(await this.realWeatherService.request());
        }
        const requestTimeInMillis = Date.now() - initialTime;
        console.log(`Request processed in ${requestTimeInMillis} milliseconds`);
        return this.cachedResponse;
    }

    private isCacheExpired(): boolean {
        return (this.cachedResponse && this.cacheDate) ? Date.now() > this.cacheDate.getTime() + this.expirationTimeInMillis : true;
    }

    private setCache(weatherForecast: WeatherForecast | undefined) {
        this.cachedResponse = weatherForecast;
        this.cacheDate = new Date();
    }
}

//The client code works with real and proxied services
async function clientCode_7(weatherService: WeatherService) {
    for (let i = 0; i < 3; i += 1) {
        const weatherForecast = await weatherService.request();
        if (weatherForecast) console.log(`The weather forecast is ${weatherForecast.avgTemperature}º average temperature and ${weatherForecast.maxPrecipitationProbability}% max precipitation probability.`);
    }
}

async function main() {
    console.log('Client: Executing the client code with a real weather service:');
    const realWeatherService = new RealWeatherServiceSDK();
    await clientCode_7(realWeatherService);
    console.log('');
    console.log('Client: Executing the same client code with a proxied weather service:');
    const proxy = new ProxyWeatherService(realWeatherService);
    await clientCode_7(proxy);
}

main();
