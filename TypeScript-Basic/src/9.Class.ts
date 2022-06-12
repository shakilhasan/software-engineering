{
    //Class
    class Player{
        name:string;
        age:number;
        country:string;
        constructor(n:string,a:number,c:string) {
            this.name=n;
            this.age=a;
            this.country=c;
        }
        play(){
             console.log(`${this.name} from ${this.country} is playing`);
        }
    }
    const sakib = new Player('Sakib', 40, 'BD');
    const tamim= new Player('Tamim', 45, 'BD');
    sakib.play();
    tamim.play();
   const players:Player[]=[]; // Player type array
   // players.push('sakib'); //error
    players.push(sakib);
    players.push(tamim);
    console.log(players);
}
