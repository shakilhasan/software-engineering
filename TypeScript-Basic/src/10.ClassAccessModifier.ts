{
    //Access Modifier
    class Player{
        private name:string;
        public age:number;
        readonly country:string;
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
    // sakib.name='sakib-1' //error, private property can not change
    sakib.age=50;
    // sakib.country='BD-1'; //error, readonly property can not change
    // console.log(sakib.name); //error, private property can not access
    console.log(sakib.age);
    console.log(sakib.country);
}
{
    //class shortcut declaration
    class Player{
        constructor(
            private name:string,
            public age:number,
            readonly country:string
         ) {}
        play(){
            console.log(`${this.name} from ${this.country} is playing`);
        }
    }

}
