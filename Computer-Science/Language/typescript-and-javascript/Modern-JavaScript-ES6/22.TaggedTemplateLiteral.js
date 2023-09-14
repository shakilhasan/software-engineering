function modifier(strings, ...values) { //Interpolated values, strings
    console.log(strings, values)
    const n = strings.reduce((pre, current) => {
        return pre + current + (values.length ? 'Mr. ' + values.shift() : '');
    }, '')
    return n;
}

let player1 = 'sakib';
let player2 = 'tamim';
console.log(modifier`We have ${player1} and ${player2} in our team.`);
