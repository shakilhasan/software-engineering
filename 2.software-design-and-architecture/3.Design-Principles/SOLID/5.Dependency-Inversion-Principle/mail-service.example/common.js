"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shoppingCart = exports.CheckoutService = exports.ShoppingCart = exports.Customer = void 0;
//Models
class Customer {
    fullName;
    email;
    constructor(fullName, email) {
        this.fullName = fullName;
        this.email = email;
    }
    getFullName() {
        return this.fullName;
    }
    setFullName(fullName) {
        this.fullName = fullName;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
}
exports.Customer = Customer;
class ShoppingCart {
    totalAmount;
    customer;
    constructor(totalAmount, customer) {
        this.totalAmount = totalAmount;
        this.customer = customer;
    }
    getTotalAmount() {
        return this.totalAmount;
    }
    setTotalAmount(totalAmount) {
        this.totalAmount = totalAmount;
    }
    getCustomer() {
        return this.customer;
    }
    setCustomer(customer) {
        this.customer = customer;
    }
}
exports.ShoppingCart = ShoppingCart;
//Services
class CheckoutService {
    mailService;
    constructor(mailService) {
        this.mailService = mailService;
    }
    endConfirmationSms(shoppingCart) {
        let message = "Thank you, " + shoppingCart.getCustomer().getFullName() + " for shopping at our store." + "\n Your order of total BDT " + shoppingCart.getTotalAmount() + " has been confirmed.";
        this.mailService.sendMail(message, shoppingCart.getCustomer().getEmail());
    }
    checkout(shoppingCart) {
        console.log("Checking out " + shoppingCart.getCustomer().getFullName());
        this.endConfirmationSms(shoppingCart);
    }
}
exports.CheckoutService = CheckoutService;
//client code
let customer = new Customer("Hasan", "hasan@gmail.com");
exports.shoppingCart = new ShoppingCart(570.00, customer);
