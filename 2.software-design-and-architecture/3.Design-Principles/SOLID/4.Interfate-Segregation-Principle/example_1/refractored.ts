//interface
interface SavingsAccount_1 {
    getBalance(): number;

    creditLocalAmount(amountInBDT: number): any;
}

interface InternationalAmountTransferable {
    creditInternationalAmount(amountInUSD: number): any;
}

//accounts
class BaseAccount_1 {
    constructor(protected accountId: number, protected accountName: String, protected balance: number) {
    }

    getBalance(): number {
        return this.balance;
    }

    setBalance(balance: number): any {
        this.balance = balance;
    }
}

class StudentAccount_1 extends BaseAccount_1 implements SavingsAccount_1 {
    constructor(accountId: number, accountName: String, balance: number, private institutionName: String) {
        super(accountId, accountName, balance);
    }

    creditLocalAmount(amountInBDT: number): any {
        this.balance += amountInBDT;
    }

}

class RemittanceSavingsAccount_1 extends BaseAccount_1 implements SavingsAccount_1, InternationalAmountTransferable {

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
let remittanceSavingsAccount_1 = new RemittanceSavingsAccount_1(1, "Rahim", 100, "Italy");
remittanceSavingsAccount_1.creditLocalAmount(100);
remittanceSavingsAccount_1.creditInternationalAmount(10);
console.log("Remittance Account Balance: " + remittanceSavingsAccount_1.getBalance());

let studentAccount_1 = new StudentAccount_1(1, "Karim", 100, "BUET");
studentAccount_1.creditLocalAmount(100);
console.log("Student Account Balance: " + studentAccount_1.getBalance());
