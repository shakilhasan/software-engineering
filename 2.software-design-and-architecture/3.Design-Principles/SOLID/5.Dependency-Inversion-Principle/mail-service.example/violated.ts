//Services
import {CheckoutService, shoppingCart} from "./common";

class MailService {
    sendMail(text: String, email: String): void {
        console.log("Sending SMS via GP:");
        console.log("----> Receiver: " + email);
        console.log("----> Text:\n" + text);
    }
}

//client code
let mailService = new MailService();
let checkoutService = new CheckoutService(mailService);
checkoutService.checkout(shoppingCart);
