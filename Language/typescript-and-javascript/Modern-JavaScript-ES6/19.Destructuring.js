//object Destructuring
{
    const user = {
        id: 1,
        name: 'sakib',
        age: 35,
        education: {
            degree: 'Msc',
            cgpa: '4'
        }


    }
    const {name} = user // extract name from user, assign to a new variable
    console.log(name)

    const {name: title} = user //with alias
    console.log(title)

    const {education: {degree}} = user // extract nested variable
    console.log(degree)

    const {myeducation: {cgpa} = {}} = user // set default value, to avoid errors
    console.log(cgpa)
}

//array Destructuring
{
    console.log('-------------------')
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numbers1 = [1, 2, [3, 4, 5, 6], 7, 8, 9];
    const [a, b] = numbers
    console.log(a, b);

    const [, , c, , , d] = numbers // use comma to skip values
    console.log(c, d);

    const [, , [f, g]] = numbers1 // extract nested variable
    console.log(f, g);

}

//swap element
{
    console.log('-------------------')
    let a = 10;
    let b = 20;
    [a, b] = [b, a]
    console.log(a, b)
}
