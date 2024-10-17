//https://leetcode.com/problems/plus-one
export function plusOne1(digits: number[]): number[] {
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

export function plusOne(digits: number[]): number[] {
    let c = 1, len = digits.length;
    for(let i = len-1; i >= 0; i--)
        if(digits[i] === 9 && c) digits[i] = 0;
        else digits[i] += c,c=0;
    if(c) digits.unshift(1);
    return digits;
}
console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([0])); // [1]
console.log(plusOne([9])); // [1, 0]
console.log(plusOne([9,9])); // [1,0,0]
