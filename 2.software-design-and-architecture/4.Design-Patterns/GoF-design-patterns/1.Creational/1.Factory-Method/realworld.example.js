"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBuilder = exports.User = void 0;
class User {
    name;
    surname;
    email;
    gender = Gender.Undefined;
    address;
    isAdmin = false;
    phoneNumber;
    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    setEmail(email) {
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
            throw new Error('Invalid email format');
        this.email = email;
    }
    setGender(gender) {
        this.gender = gender;
    }
    setAddress(streetName, number, city, zipCode, country) {
        this.address = `${streetName} ${number}, ${city} (${zipCode}) ${country}`;
    }
    setIsAdmin(isAdmin) {
        this.isAdmin = isAdmin;
    }
    setPhoneNumber(phoneNumber) {
        if (!/^[+]?[(]?\d{3})?[-\s.]?\d{3}[-\s.]?\d{4,6}$/.test(phoneNumber))
            throw new Error('Invalid phone number format');
        this.phoneNumber = phoneNumber;
    }
}
exports.User = User;
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Undefined"] = "Undefined";
})(Gender || (Gender = {}));
/**
 * EN: User concrete Builder
 */
class UserBuilder {
    #user;
    constructor() {
        this.reset();
    }
    reset() {
        this.#user = new User();
        return this;
    }
    getProduct() {
        const product = this.#user;
        this.reset();
        return product;
    }
    setName(name) {
        this.#user.setName(name);
        return this;
    }
    setSurname(surname) {
        this.#user.setSurname(surname);
        return this;
    }
    setEmail(email) {
        this.#user.setEmail(email);
        return this;
    }
    setMaleGender() {
        this.#user.setGender(Gender.Male);
        return this;
    }
    setFemaleGender() {
        this.#user.setGender(Gender.Female);
        return this;
    }
    setUndefinedGender() {
        this.#user.setGender(Gender.Undefined);
        return this;
    }
    setAddress(streetName, number, city, zipCode, country) {
        this.#user.setAddress(streetName, number, city, zipCode, country);
        return this;
    }
    setIsAdmin() {
        this.#user.setIsAdmin(true);
        return this;
    }
    setPhoneNumber(phoneNumber) {
        this.#user.setPhoneNumber(phoneNumber);
        return this;
    }
}
exports.UserBuilder = UserBuilder;
// client
const userBuilder = new UserBuilder();
const user1 = userBuilder
    .setName('Justin')
    .setSurname('Case')
    .setEmail('justin.case@gmail.com')
    .setMaleGender()
    .getProduct();
const user2 = userBuilder
    .setName('Pat')
    .setSurname('Roll')
    .setPhoneNumber('+34555989898')
    .setAddress('Corner Case', 7, 'LA', '08080', 'US')
    .getProduct();
const user3 = userBuilder
    .setEmail('hugo.first@gmail.com')
    .setIsAdmin()
    .getProduct();
