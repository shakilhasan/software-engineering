{
    // function type
    let myfunc:Function; // 'function'-keyword is reserve
    // myfunc =5; //error
    const fn=()=>('ff');
    myfunc=fn;
    console.log(myfunc());
}
{
    // parameter type
    const myfunc=(a:string,b:string)=>{
        console.log(`hello ${a} ${b}`);
    }

    myfunc("A","B");
}
{
    // optional parameter type
    const myfunc=(a:string,b:string, c?:string)=>{
        console.log(`hello ${a} ${b}`);
    }

    myfunc("A","B");
}
{
    // default parameter value
    const myfunc=(a:string,b:string, c:string="C")=>{
        console.log(`hello ${a} ${b} ${c}`);
    }

    myfunc("A","B", "optional");
    myfunc("A","B");
}

{
    //return type
    const myfunc=(a:number,b:number)=>{
        return a*b; // a,b both are number, so return type is number
    }
    console.log(myfunc(3,5));
}

{
    //return type
    const myfunc=(a:number,b:number):number=>{ // define return type
        return a*b;
    }
    console.log(myfunc(3,5));
}
