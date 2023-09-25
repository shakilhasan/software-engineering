"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Services
const common_1 = require("./common");
class MailService {
    sendMail(text, email) {
        console.log("Sending SMS via GP:");
        console.log("----> Receiver: " + email);
        console.log("----> Text:\n" + text);
    }
}
//client code
let mailService = new MailService();
let checkoutService = new common_1.CheckoutService(mailService);
checkoutService.checkout(common_1.shoppingCart);
