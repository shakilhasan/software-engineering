"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class VehicleFlyweight {
    vehicleType;
    shared3DModel;
    constructor(vehicleType) {
        this.vehicleType = vehicleType;
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
    render(x, y, direction) {
        console.log(`Rendered ${this.vehicleType} in position {${x}, ${y}} with direction ${direction}º`);
    }
    readFile(filename) {
        if (/^large/.test(filename))
            return Array.from({ length: 1024 * 1024 }, () => Math.random());
        if (/^medium/.test(filename))
            return Array.from({ length: 1024 * 256 }, () => Math.random());
        return Array.from({ length: 1024 * 16 }, () => Math.random());
    }
}
var VehicleType;
(function (VehicleType) {
    VehicleType["Car"] = "Car";
    VehicleType["Truck"] = "Truck";
    VehicleType["Motorbike"] = "Motorbike";
})(VehicleType || (VehicleType = {}));
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["NorthEast"] = 45] = "NorthEast";
    Direction[Direction["East"] = 90] = "East";
    Direction[Direction["SouthEast"] = 135] = "SouthEast";
    Direction[Direction["South"] = 180] = "South";
    Direction[Direction["SouthWest"] = 225] = "SouthWest";
    Direction[Direction["West"] = 270] = "West";
    Direction[Direction["NorthWest"] = 315] = "NorthWest";
})(Direction || (Direction = {}));
//The Vehicle class contains the intrinsic state and a reference to the shared state
class Vehicle {
    vehicleType;
    x;
    y;
    direction;
    vehicleFlyweight;
    constructor(vehicleType, x, y, direction, vehicleFlyweight) {
        this.vehicleType = vehicleType;
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.vehicleFlyweight = vehicleFlyweight;
    }
    render(x, y, direction) {
        if (this.vehicleFlyweight)
            this.vehicleFlyweight.render(x, y, direction);
    }
}
exports.Vehicle = Vehicle;
//The Vehicle factory internally manages all the Flyweight objects
class VehicleFactory {
    static vehicleFlyweights = new Map();
    static getCar(x, y, direction) {
        return this.getVehicle(VehicleType.Car, x, y, direction);
    }
    static getTruck(x, y, direction) {
        return this.getVehicle(VehicleType.Truck, x, y, direction);
    }
    static getMotorbike(x, y, direction) {
        return this.getVehicle(VehicleType.Motorbike, x, y, direction);
    }
    // Checks if the external state exists in the cache, otherwise it creates a new one and stores it for reusing in the future
    static getVehicle(vehicleType, x, y, direction) {
        if (!this.vehicleFlyweights.has(vehicleType))
            this.vehicleFlyweights.set(vehicleType, new VehicleFlyweight(vehicleType));
        return new Vehicle(vehicleType, x, y, direction, this.vehicleFlyweights.get(vehicleType));
    }
}
//The client code
console.log('Initially the application takes:');
for (const [key, value] of Object.entries(process.memoryUsage())) {
    console.log(`    ${Math.round(value / (1024 * 1024))}MB of ${key}`);
}
const vehicles = [];
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
const flyweights = [];
for (let i = 0; i < 100; i += 1) {
    flyweights.push(new VehicleFlyweight(VehicleType.Truck));
}
console.log(`After creating ${flyweights.length} flyweights finally the application takes:`);
for (const [key, value] of Object.entries(process.memoryUsage())) {
    console.log(`    ${Math.round(value / (1024 * 1024))}MB of ${key}`);
}
