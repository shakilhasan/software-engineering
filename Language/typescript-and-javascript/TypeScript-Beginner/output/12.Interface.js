"use strict";
{
    //without interface
    function drawRectangle(options) {
        let width = options.width;
        let length = options.length;
        console.log(width);
    }

    drawRectangle({
        width: 30,
        length: 20,
    });
}
{
    function drawRectangle(options) {
        let width = options.width;
        let length = options.length;
        console.log(width);
    }

    drawRectangle({
        width: 30,
        length: 20,
        // height:40, // error, not declare in interface
    });
    let threeDdOptions = {
        width: 300,
        length: 200,
        height: 400,
    };
    drawRectangle(threeDdOptions); // pass reference, so can have extra property
}
{
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

    const sakib = new Player('Sakib', 40, 'BD');
    let tamim;
    tamim = new Player('Tamim', 45, 'BD-1');
    console.log(sakib.age);
    console.log(tamim.country);
    const players = [];
    players.push(sakib);
    players.push(tamim);
    console.log(players);
}
{
    class Player {
        constructor(name, age, country) {
            this.name = name;
            this.age = age;
            this.country = country;
        }

        getProperty() {
            return this.age;
        }

        play() {
            console.log(`${this.name} from ${this.country} is playing`);
        }
    }
}
