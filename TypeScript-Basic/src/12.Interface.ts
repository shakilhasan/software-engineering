import {Player} from "./11.ModuleSystem/classes/Player";

{
    //without interface
    function drawRectangle(options:{width:number, length:number}){
        let width = options.width;
        let length = options.length;
        console.log(width);
    }
    drawRectangle({
        width:30,
        length:20,
    });
}
{
    // interface, different from type-alias
    interface RectangleOptions{
        width:number;
        length:number;
    }
    function drawRectangle(options:RectangleOptions){
        let width = options.width;
        let length = options.length;
        console.log(width);
    }
    drawRectangle({
        width:30,
        length:20,
        // height:40, // error, not declare in interface
    });
    let threeDdOptions={
        width:300,
        length:200,
        height:400,
    }
    drawRectangle(threeDdOptions); // pass reference, so can have extra property
}
{
    // interface for Class
    interface IsPlayer{
        name:string;
        age:number;
        readonly country:string;
        play():void;
    }

    class Player implements IsPlayer {
        constructor(
            public name:string,
            public age:number,
            readonly country:string
        ) {}
        play(){
            console.log(`${this.name} from ${this.country} is playing`);
        }
    }
    const sakib = new Player('Sakib', 40, 'BD');
    let tamim:IsPlayer;
    tamim = new Player('Tamim', 45, 'BD-1');
    console.log(sakib.age);
    console.log(tamim.country);
    const players:IsPlayer[]=[];
    players.push(sakib);
    players.push(tamim);
    console.log(players)
}
{
    // interface for private property
    interface IsPlayer{
        name:string;
        readonly country:string;
        // age:number;
        getProperty():number;
        play():void;
    }

    class Player implements IsPlayer {
        constructor(
            public name:string,
            private age:number,
            readonly country:string
        ) {}
        getProperty(){
            return this.age;
        }
        play(){
            console.log(`${this.name} from ${this.country} is playing`);
        }
    }

}
