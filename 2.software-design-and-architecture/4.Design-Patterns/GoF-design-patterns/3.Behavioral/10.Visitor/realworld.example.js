"use strict";
class HeadPhonesProduct {
    brand;
    model;
    isWireless;
    weight;
    price;
    constructor(brand, model, isWireless, weight, price) {
        this.brand = brand;
        this.model = model;
        this.isWireless = isWireless;
        this.weight = weight;
        this.price = price;
    }
    accept(visitor) {
        return visitor.visitHeadPhones(this);
    }
}
class WashingMachineProduct {
    brand;
    model;
    isIndustrial;
    weight;
    price;
    constructor(brand, model, isIndustrial, weight, price) {
        this.brand = brand;
        this.model = model;
        this.isIndustrial = isIndustrial;
        this.weight = weight;
        this.price = price;
    }
    accept(visitor) {
        return visitor.visitWashingMachine(this);
    }
}
class TVProduct {
    brand;
    model;
    inches;
    os;
    price;
    constructor(brand, model, inches, os, price) {
        this.brand = brand;
        this.model = model;
        this.inches = inches;
        this.os = os;
        this.price = price;
    }
    accept(visitor) {
        return visitor.visitTV(this);
    }
}
const CLASS_A_SHIPPING_COST_MULTIPLIER = 10;
const CLASS_B_SHIPPING_COST_MULTIPLIER = 0.005;
const CLASS_C_SHIPPING_COST_MULTIPLIER = 25;
const INDUSTRIAL_EXTRA_SHIPPING_COST = 200;
const STANDARD_EXTRA_SHIPPING_COST = 20;
const WEBOS_EXTRA_SHIPPING_COST = 20;
const APPLE_EXTRA_SHIPPING_COST = 100;
const APPLE_BRAND_NAME = 'Apple';
const WEBOS_OS_NAME = 'webOS';
class ShippingCostCalculatorVisitor {
    visitHeadPhones(headphones) {
        const shippingCost = headphones.weight * CLASS_A_SHIPPING_COST_MULTIPLIER;
        if (headphones.brand === APPLE_BRAND_NAME) {
            return shippingCost + APPLE_EXTRA_SHIPPING_COST;
        }
        return shippingCost;
    }
    visitWashingMachine(washingMachine) {
        const shippingCost = washingMachine.weight * CLASS_B_SHIPPING_COST_MULTIPLIER;
        if (washingMachine.isIndustrial) {
            return shippingCost + INDUSTRIAL_EXTRA_SHIPPING_COST;
        }
        return shippingCost + STANDARD_EXTRA_SHIPPING_COST;
    }
    visitTV(tv) {
        const shippingCost = tv.inches * CLASS_C_SHIPPING_COST_MULTIPLIER;
        if (tv.os === WEBOS_OS_NAME) {
            return shippingCost + WEBOS_EXTRA_SHIPPING_COST;
        }
        return shippingCost;
    }
}
const RECYCLABLE_ELECTRONIC_PRODUCT_SPECIAL_TAX = 25;
const VAT = 0.21;
class TaxCalculatorVisitor {
    visitHeadPhones(headphones) {
        return headphones.price * VAT;
    }
    visitWashingMachine(washingMachine) {
        return washingMachine.price * VAT +
            RECYCLABLE_ELECTRONIC_PRODUCT_SPECIAL_TAX;
    }
    visitTV(tv) {
        return tv.price * VAT;
    }
}
function calculateCosts(products, visitor) {
    return products.reduce((acc, curr) => (acc + curr.accept(visitor)), 0);
}
const products = [
    new HeadPhonesProduct('Apple', 'Airpods', true, 50, 200),
    new WashingMachineProduct('Balay', 'C', false, 30000, 950),
    new TVProduct('LG', 'RW330', 65, 'WebOS', 350),
];
const shippingCostCalculator = new ShippingCostCalculatorVisitor();
const shippingCosts = calculateCosts(products, shippingCostCalculator);
console.log(`Total shipping costs are ${shippingCosts}`);
const taxesCalculator = new TaxCalculatorVisitor();
const taxes = calculateCosts(products, taxesCalculator);
console.log(`Total taxes are ${taxes}`);
