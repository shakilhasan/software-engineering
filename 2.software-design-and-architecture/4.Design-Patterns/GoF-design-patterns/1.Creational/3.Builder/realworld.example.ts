export class User {
    public name: string | undefined;
    public surname: string | undefined;
    public email: string | undefined;
    public gender: Gender = Gender.Undefined;
    public address: string | undefined;
    public isAdmin: boolean = false;
    public phoneNumber: string | undefined;

    public setName(name: string) {
        this.name = name;
    }

    public setSurname(surname: string) {
        this.surname = surname;
    }

    public setEmail(email: string) {
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) throw new Error('Invalid email format');
        this.email = email;
    }

    public setGender(gender: Gender) {
        this.gender = gender;
    }

    public setAddress(
        streetName: string,
        number: number,
        city: string,
        zipCode: string,
        country: string) {
        this.address = `${streetName} ${number}, ${city} (${zipCode}) ${country}`;
    }

    public setIsAdmin(isAdmin: boolean) {
        this.isAdmin = isAdmin;
    }

    public setPhoneNumber(phoneNumber: string) {
        // if (!/^[+]?[(]?\d{3})?[-\s.]?\d{3}[-\s.]?\d{4,6}$/.test(phoneNumber))
        if (!/^[+]?[(]?\d{3}[-\s.]?\d{3}[-\s.]?\d{4,6}$/.test(phoneNumber)) throw new Error('Invalid phone number format');
        this.phoneNumber = phoneNumber;
    }
}

enum Gender { Male = 'Male', Female = 'Female', Undefined = 'Undefined' }

/**
 * EN: General interface Builder
 */
export interface Builder {
    reset(): any;

    getProduct(): any;
}

/**
 * EN: User concrete Builder
 */
export class UserBuilder implements Builder {
    #user: User;

    constructor() {
        this.#user = new User();
        // this.reset();
    }

    public reset() {
        this.#user = new User();
        return this;
    }

    getProduct() {
        const product = this.#user;
        this.reset();
        return product;
    }

    public setName(name: string) {
        this.#user.setName(name);
        return this;
    }

    public setSurname(surname: string) {
        this.#user.setSurname(surname);
        return this;
    }

    public setEmail(email: string) {
        this.#user.setEmail(email);
        return this;
    }

    public setMaleGender() {
        this.#user.setGender(Gender.Male);
        return this;
    }

    public setFemaleGender() {
        this.#user.setGender(Gender.Female);
        return this;
    }

    public setUndefinedGender() {
        this.#user.setGender(Gender.Undefined);
        return this;
    }

    public setAddress(
        streetName: string,
        number: number,
        city: string,
        zipCode: string,
        country: string) {
        this.#user.setAddress(streetName, number, city, zipCode, country);
        return this;
    }

    public setIsAdmin() {
        this.#user.setIsAdmin(true);
        return this;
    }

    public setPhoneNumber(phoneNumber: string) {
        this.#user.setPhoneNumber(phoneNumber);
        return this;
    }
}

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
