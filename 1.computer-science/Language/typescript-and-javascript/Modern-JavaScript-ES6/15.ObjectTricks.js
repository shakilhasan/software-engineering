//https://youtu.be/eey1BnpTbKw
//Important object tricks
{
    const javascript = {
        name: 'javascript',
        founder: 'Brendan Eich',
        estd: '1995',
        ranking: 1
    }
    let keys = Object.keys(javascript); // *if only need work with keys
    console.log(keys);

    let values = Object.values(javascript); // *if only need work with values
    console.log(values);

    let entries = Object.entries(javascript); // *if need object as array
    console.log(entries);

}

//object shorthand
{
    let a = 10;
    let b = 5;
    const javascript = {
        name: 'javascript',
        founder: 'Brendan Eich',
        estd: '1995',
        ranking: 1,
        a: a, //not shorthand
        b, //shorthand, if key and value same
    }
}