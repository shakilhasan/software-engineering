//interface
interface SavingsAccount {
    getBalance(): number;

    creditLocalAmount(amountInBDT: number): any;

    creditInternationalAmount(amountInUSD: number): any;
}

//accounts
class BaseAccount {
    constructor(protected accountId: number, protected accountName: String, protected balance: number) {
    }

    getBalance(): number {
        return this.balance;
    }

    setBalance(balance: number): any {
        this.balance = balance;
    }
}

class StudentAccount extends BaseAccount implements SavingsAccount {
    constructor(accountId: number, accountName: String, balance: number, private institutionName: String) {
        super(accountId, accountName, balance);
    }

    creditLocalAmount(amountInBDT: number): any {
        this.balance += amountInBDT;
    }

    creditInternationalAmount(amountInUSD: number): any {
        console.log("Error: International amount transfer is not applicable for student account")
    }
}

class RemittanceSavingsAccount extends BaseAccount implements SavingsAccount {

    constructor(accountId: number, accountName: String, balance: number, private primarySourceCountry: String) {
        super(accountId, accountName, balance);
    }

    getBalance(): any {
        return this.balance;
    }

    creditLocalAmount(amountInBDT: number): any {
        this.balance += amountInBDT;
    }

    creditInternationalAmount(amountInUSD: number): any {
        let amountInBDT = amountInUSD * 86;
        let incentiveAmount = amountInBDT * 0.02;
        this.balance += amountInBDT + incentiveAmount;
    }
}

//client code
let remittanceSavingsAccount = new RemittanceSavingsAccount(1, "Rahim", 100, "Italy");
remittanceSavingsAccount.creditLocalAmount(100);
remittanceSavingsAccount.creditInternationalAmount(10);
console.log("Remittance Account Balance: " + remittanceSavingsAccount.getBalance());

let studentAccount = new StudentAccount(1, "Karim", 100, "BUET");
studentAccount.creditLocalAmount(100);
studentAccount.creditInternationalAmount(10);
console.log("Student Account Balance: " + studentAccount.getBalance());
