//GENERICS
{
    //without generic
    const addID = (obj: object) => {
        let id = Math.floor(Math.random() * 100);
        return {...obj, id};

    }
    let user = addID({
        name: "Mashrafi", age: 40,
    })
    console.log(user.id);
    // user.name; //error
}
{
    //with generic, type is work like a  variable
    const addID = <T>(obj: T) => {
        let id = Math.floor(Math.random() * 100);
        return {...obj, id};
    }
    let user = addID({
        name: "Mashrafi", age: 40,
    })
    console.log(user.id);
    console.log(user.name);

    let str = addID("abcde"); // <T> can receive any type
    console.log(str);
}
{
    // generic with extends
    const addID = <T extends object>(obj: T) => {
        let id = Math.floor(Math.random() * 100);
        return {...obj, id};
    }
    let user = addID({
        name: "Mashrafi", age: 40,
    })
    // let str=addID("abcde"); //error, <T> can receive only object
}
{
    // extends with define object
    const addID = <T extends { //name and age must in argument
        name: string, age: number,
    }>(obj: T) => {
        let id = Math.floor(Math.random() * 100);
        return {...obj, id};
    }
    let user = addID({
        name: "Mashrafi", age: 40, country: "BD", // extra property can pass
    })
}
{
    // generic in interface
    interface APIResponse<T> {
        status: number,
        type: string,
        data: T; //receive type as variable/generic
    }

    const resonse1: APIResponse<object> = {
        status: 200, type: 'good', data: {
            name: 'sakib', age: 40
        },
    }
    console.log(resonse1);
}
