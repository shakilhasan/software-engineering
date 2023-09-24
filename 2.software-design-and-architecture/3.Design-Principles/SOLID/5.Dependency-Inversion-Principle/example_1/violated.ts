//Models
class Customer {
    constructor(private fullName: String, private email: String) {
    }

    getFullName(): String {
        return this.fullName;
    }

    setFullName(fullName: string): void {
        this.fullName = fullName;
    }

    getEmail(): String {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }
}

class ShoppingCart {
    constructor(private totalAmount: number, private customer: Customer) {
    }

    getTotalAmount(): number {
        return this.totalAmount;
    }

    setTotalAmount(totalAmount: number): void {
        this.totalAmount = totalAmount;
    }

    getCustomer(): Customer {
        return this.customer;
    }

    setCustomer(customer: Customer): void {
        this.customer = customer;
    }
}

//Services
class MailService {
    sendMail(text: String, email: String): void {
        console.log("Sending SMS via GP:");
        console.log("----> Receiver: " + email);
        console.log("----> Text:\n" + text);
    }
}

class CheckoutService {
    constructor(private mailService: MailService) {
    }

    endConfirmationSms(shoppingCart: ShoppingCart): void {
        let message = "Thank you, " + shoppingCart.getCustomer().getFullName() + " for shopping at our store." + "\n Your order of total BDT " + shoppingCart.getTotalAmount() + " has been confirmed.";
        this.mailService.sendMail(message, shoppingCart.getCustomer().getEmail());
    }

    checkout(shoppingCart: ShoppingCart): void {
        console.log("Checking out " + shoppingCart.getCustomer().getFullName());
        this.endConfirmationSms(shoppingCart);
    }
}

//client code
let customer = new Customer("Hasan", "hasan@gmail.com");
let shoppingCart = new ShoppingCart(570.00, customer);
let mailService = new MailService();
let checkoutService = new CheckoutService(mailService);
checkoutService.checkout(shoppingCart);
