{
    let a: string;
    let b: number; // explicit type
    let c: string | number; // union type
    a = 'sakib';
    b = 4;
    // b='tamin';  //error
    c = 5;
    c = 'tamim';
}
{
    //array
    {
        console.log("array _________________________");
        let a: string[] = [];
        a.push('a', 'tamim');
        console.log(a);
    }

    {
        let a: (string | number)[] = []; // union type
        a.push(1, 2, 'tamim');
        console.log(a);
    }
}
{
    //object
    console.log("object _________________________");
    {
        let obj: {
            name: string,
            age: number,
            adult: boolean,
        }
        obj = {
            name: 'sakib',
            age: 34,
            adult: true,
            // adult:'tamim', // error
        }
        // obj=[1,2,3,4,5]; // error
        console.log(obj);
    }
    {
        let obj: object;
        obj = [1, 2, 3, 4]; // array is a certain type of object
        console.log(obj);
    }
}
