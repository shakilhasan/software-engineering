"use strict";
//accounts
class BaseAccount {
    accountId;
    accountName;
    balance;
    constructor(accountId, accountName, balance) {
        this.accountId = accountId;
        this.accountName = accountName;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(balance) {
        this.balance = balance;
    }
}
class StudentAccount extends BaseAccount {
    institutionName;
    constructor(accountId, accountName, balance, institutionName) {
        super(accountId, accountName, balance);
        this.institutionName = institutionName;
    }
    creditLocalAmount(amountInBDT) {
        this.balance += amountInBDT;
    }
    creditInternationalAmount(amountInUSD) {
        console.log("Error: International amount transfer is not applicable for student account");
    }
}
class RemittanceSavingsAccount extends BaseAccount {
    primarySourceCountry;
    constructor(accountId, accountName, balance, primarySourceCountry) {
        super(accountId, accountName, balance);
        this.primarySourceCountry = primarySourceCountry;
    }
    getBalance() {
        return this.balance;
    }
    creditLocalAmount(amountInBDT) {
        this.balance += amountInBDT;
    }
    creditInternationalAmount(amountInUSD) {
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
