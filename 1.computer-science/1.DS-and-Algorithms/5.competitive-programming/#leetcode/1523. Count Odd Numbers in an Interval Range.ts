//https://leetcode.com/problems/count-odd-numbers-in-an-interval-range
function countOdds(low: number, high: number): number {
    return Math.ceil(high / 2) - Math.floor(low / 2);
}

console.log(countOdds(3, 7)) //3
console.log(countOdds(8, 10)) //1