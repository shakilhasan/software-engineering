{
    // Function Signature
    let add: (x: number, b: number) => number;
    add = (a: number, b: number) => {
        return a + b;
    }
    console.log(add(1, 3));
}
{
    let calculate: (a: number, b: number, c: string) => (number);
    calculate = (a: number, b: number, c: string) => {
        if (c === 'add') {
            return a + b;
        } else {
            return a - b;
        }
    }
    console.log(calculate(6, 3, 'add'));
    console.log(calculate(6, 3, 'minus'));

}
{
    let userDetails: (id: (number | string), userDetails: { name: string; age: number }) => void;
    userDetails = (id: number | string, user: { name: string, age: number }) => { // object name can not change but property name can change
        console.log(`id- ${id} age- ${user.age}`)
    }
    userDetails(1, {name: "sakib", age: 40});
}
