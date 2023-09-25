"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
class GpMailProvider {
    sendMail(text, phoneNumber) {
        console.log("Sending SMS via GP:");
        console.log("----> Receiver: " + phoneNumber);
        console.log("----> Text:\n" + text);
    }
}
class RobiMailProvider {
    sendMail(text, phoneNumber) {
        console.log("Sending SMS via Robi:");
        console.log("----> Receiver: " + phoneNumber);
        console.log("----> Text:\n" + text);
    }
}
class MailService_1 {
    mailProvider;
    constructor(mailProvider) {
        this.mailProvider = mailProvider;
    }
    sendMail(text, email) {
        this.mailProvider.sendMail(email, text);
    }
}
//client code
// let mailProvider = new GpMailProvider();
let mailProvider = new RobiMailProvider();
let mailService_1 = new MailService_1(mailProvider);
let checkoutService_1 = new common_1.CheckoutService(mailService_1);
checkoutService_1.checkout(common_1.shoppingCart);
