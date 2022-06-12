{
    // Type Alias
    type stringOrNumber= string | number;
    type userType= {name:string, age:number};

    const  userDetails=(id:stringOrNumber, user:userType)=>{
        console.log(`User id is ${id}, name is ${user.name}, age is ${user.age}`);
    };
    const sayHello=(user:userType)=>{
        console.log(`Hello ${user.age>50?"Sir":"Mr."} ${user.name}`);
    };

    userDetails(1,{name:"sakib", age:35});
    sayHello({name:"sakib", age:35});
}
