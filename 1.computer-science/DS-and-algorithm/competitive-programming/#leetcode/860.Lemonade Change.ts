//https://leetcode.com/problems/lemonade-change
function lemonadeChange(bills: number[]): boolean {
    let five = 0, ten = 0;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) five++;
        else if (bills[i] === 10 && five > 0) five--, ten++;
        else if (bills[i] === 20 && ((five && ten) || five > 2)) {
            if (ten) five--, ten--;
            else five = five - 3;
        } else return false
    }
    return true
}

console.log(lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 20, 5]))

export {lemonadeChange};
