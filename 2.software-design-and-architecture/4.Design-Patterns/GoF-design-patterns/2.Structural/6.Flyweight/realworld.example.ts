class VehicleFlyweight {
    public shared3DModel: number[];

    constructor(protected vehicleType: VehicleType) {
        switch (vehicleType) {
            case VehicleType.Car:
                this.shared3DModel = this.readFile('mediumCar.3d');
                break;
            case VehicleType.Truck:
                this.shared3DModel = this.readFile('largeTruck.3d');
                break;
            default:
                this.shared3DModel = this.readFile('smallMotorbike.3d');
        }
    }

    public render(x: number, y: number, direction: Direction) {
        console.log(`Rendered ${this.vehicleType} in position {${x}, ${y}} with direction ${direction}º`);
    }

    protected readFile(filename: string): number[] {
        if (/^large/.test(filename)) return Array.from({length: 1024 * 1024}, () => Math.random());
        if (/^medium/.test(filename)) return Array.from({length: 1024 * 256}, () => Math.random());
        return Array.from({length: 1024 * 16}, () => Math.random());
    }
}

enum VehicleType {
    Car = 'Car',
    Truck = 'Truck',
    Motorbike = 'Motorbike',
}

enum Direction {
    North = 0,
    NorthEast = 45,
    East = 90,
    SouthEast = 135,
    South = 180,
    SouthWest = 225,
    West = 270,
    NorthWest = 315,
}

//The Vehicle class constains the intrinsic state and a reference to theshared state
export class Vehicle {
    constructor(
        public vehicleType: VehicleType,
        public x: number,
        public y: number,
        public direction: Direction,
        protected vehicleFlyweight: VehicleFlyweight,
    ) {
    }

    public render(x: number, y: number, direction: Direction) {
        this.vehicleFlyweight.render(x, y, direction);
    }
}

//The Vehicle factory internally manages all the Flyweight objects
class VehicleFactory {
    private static vehicleFlyweights: Map<VehicleType, VehicleFlyweight> =
        new Map<VehicleType, VehicleFlyweight>();

    public static getCar(x: number, y: number, direction: Direction): Vehicle {
        return this.getVehicle(VehicleType.Car, x, y, direction);
    }

    public static getTruck(x: number, y: number, direction: Direction): Vehicle {
        return this.getVehicle(VehicleType.Truck, x, y, direction);
    }

    public static getMotorbike(x: number, y: number, direction: Direction): Vehicle {
        return this.getVehicle(VehicleType.Motorbike, x, y, direction);
    }

    // Checks if the external state exists in the cache, otherwise itcreates a new one and stores it for reusing in the future

    protected static getVehicle(
        vehicleType: VehicleType,
        x: number,
        y: number,
        direction: Direction,
    ): Vehicle {
        if (!this.vehicleFlyweights.has(vehicleType)) {
            this.vehicleFlyweights.set(vehicleType, new VehicleFlyweight(vehicleType));
        }
        return new Vehicle(vehicleType, x, y, direction, this.vehicleFlyweights.get(vehicleType));
    }
}

//The client code
console.log('Initially the application takes:');
for (const [key, value] of Object.entries(process.memoryUsage())) {
    console.log(`    ${Math.round(value / (1024 * 1024))}MB of ${key}`);
}

const vehicles: Vehicle[] = [];

for (let i = 0; i < 1000; i += 1) {
    const x = Math.random() * 1000;
    const y = Math.random() * 1000;
    const direction = i % 2 ? Direction.North : Direction.South;
    vehicles.push(VehicleFactory.getCar(x, y, direction));
}

for (let i = 0; i < 500; i += 1) {
    const x = Math.random() * 1000;
    const y = Math.random() * 1000;
    const direction = i % 2 ? Direction.East : Direction.West;
    vehicles.push(VehicleFactory.getTruck(x, y, direction));
}

for (let i = 0; i < 5000; i += 1) {
    const x = Math.random() * 1000;
    const y = Math.random() * 1000;
    const direction = i % 2 ? Direction.SouthEast : Direction.NorthWest;
    vehicles.push(VehicleFactory.getMotorbike(x, y, direction));
}

console.log(`After creating ${vehicles.length} vehicles the application takes:`);
for (const [key, value] of Object.entries(process.memoryUsage())) {
    console.log(`    ${Math.round(value / (1024 * 1024))}MB of ${key}`);
}

console.log('Lets create some vehicles flyweights directly to see what happens');

const flyweights: VehicleFlyweight[] = [];

for (let i = 0; i < 100; i += 1) {
    flyweights.push(new VehicleFlyweight(VehicleType.Truck));
}

console.log(`After creating ${flyweights.length} flyweights finally the application takes:`);
for (const [key, value] of Object.entries(process.memoryUsage())) {
    console.log(`    ${Math.round(value / (1024 * 1024))}MB of ${key}`);
}
