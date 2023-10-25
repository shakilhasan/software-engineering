"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fares = exports.UKTaxiCalculatorLibrary = void 0;
//The Adaptee
class UKTaxiCalculatorLibrary {
    getPriceInPounds(miles, fare) {
        if (fare === Fares.Airport) {
            return 5 + miles * 2.15;
        }
        return miles * 1.95;
    }
}
exports.UKTaxiCalculatorLibrary = UKTaxiCalculatorLibrary;
var Fares;
(function (Fares) {
    Fares[Fares["Standard"] = 0] = "Standard";
    Fares[Fares["Airport"] = 1] = "Airport";
})(Fares || (exports.Fares = Fares = {}));
//the Adapter
class UKTaxiCalculatorLibraryAdapter {
    adaptee;
    constructor(adaptee) {
        this.adaptee = adaptee;
    }
    calculatePriceInEuros(km, isAirport) {
        const miles = km * 1.609;
        const fare = isAirport ? Fares.Airport : Fares.Standard;
        const pounds = this.adaptee.getPriceInPounds(miles, fare);
        const euros = pounds * 1.15;
        return euros;
    }
}
//The client code
function client(taxiCalculator) {
    console.log('Calculating the price for a 15 Km run to the airport');
    const priceInEuros = taxiCalculator.calculatePriceInEuros(15, true);
    console.log(`Total price: ${priceInEuros}€`);
}
const incompatibleLibrary = new UKTaxiCalculatorLibrary();
const adaptedLibrary = new UKTaxiCalculatorLibraryAdapter(incompatibleLibrary);
client(adaptedLibrary);
