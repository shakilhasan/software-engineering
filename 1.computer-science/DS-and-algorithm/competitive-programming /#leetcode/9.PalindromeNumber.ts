// https://leetcode.com/problems/palindrome-number
function isPalindromeByStr(x: number): boolean {
     let str:string=x.toString();
    return str === [...str].reverse().join("");
}
console.log(isPalindromeByStr(12122121));
