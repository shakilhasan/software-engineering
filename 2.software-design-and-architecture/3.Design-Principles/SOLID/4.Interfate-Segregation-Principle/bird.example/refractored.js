"use strict";
//accounts
class BaseAccount_1 {
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
class StudentAccount_1 extends BaseAccount_1 {
    institutionName;
    constructor(accountId, accountName, balance, institutionName) {
        super(accountId, accountName, balance);
        this.institutionName = institutionName;
    }
    creditLocalAmount(amountInBDT) {
        this.balance += amountInBDT;
    }
}
class RemittanceSavingsAccount_1 extends BaseAccount_1 {
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
let remittanceSavingsAccount_1 = new RemittanceSavingsAccount_1(1, "Rahim", 100, "Italy");
remittanceSavingsAccount_1.creditLocalAmount(100);
remittanceSavingsAccount_1.creditInternationalAmount(10);
console.log("Remittance Account Balance: " + remittanceSavingsAccount_1.getBalance());
let studentAccount_1 = new StudentAccount_1(1, "Karim", 100, "BUET");
studentAccount_1.creditLocalAmount(100);
console.log("Student Account Balance: " + studentAccount_1.getBalance());
