// https://leetcode.com/problems/roman-to-integer
function romanToInt(s: string): number {
    const obj: any = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let sum = obj[s[0]], i;
    for (i = 1; i < s.length; i++) {
        sum += obj[s[i]];
        if (obj[s[i]] > obj[s[i - 1]]) sum -= obj[s[i - 1]] * 2
    }
    return sum;
}

console.log(romanToInt("XIX"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("MCDLXXVI"));
