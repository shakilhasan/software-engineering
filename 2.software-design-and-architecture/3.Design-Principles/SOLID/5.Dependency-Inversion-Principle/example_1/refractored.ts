import {CheckoutService, shoppingCart} from "./common";
//Services
interface MailProvider {
    sendMail(phoneNumber: String, text: String): void;
}

class GpMailProvider implements MailProvider {
    sendMail(text: String, phoneNumber: String): void {
        console.log("Sending SMS via GP:");
        console.log("----> Receiver: " + phoneNumber);
        console.log("----> Text:\n" + text);
    }
}

class RobiMailProvider implements MailProvider {
    sendMail(text: String, phoneNumber: String): void {
        console.log("Sending SMS via Robi:");
        console.log("----> Receiver: " + phoneNumber);
        console.log("----> Text:\n" + text);
    }
}

class MailService_1 {
    constructor(private mailProvider: MailProvider) {
    }

    sendMail(text: String, email: String): void {
        this.mailProvider.sendMail(email, text)
    }
}

//client code
// let mailProvider = new GpMailProvider();
let mailProvider = new RobiMailProvider();
let mailService_1 = new MailService_1(mailProvider);
let checkoutService_1 = new CheckoutService(mailService_1);
checkoutService_1.checkout(shoppingCart);
