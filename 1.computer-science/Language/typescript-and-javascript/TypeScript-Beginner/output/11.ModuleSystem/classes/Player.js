"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.Player = void 0;

class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}

exports.Player = Player;
