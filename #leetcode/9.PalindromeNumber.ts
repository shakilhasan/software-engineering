// https://leetcode.com/problems/palindrome-number
function isPalindromeByStr(x: number): boolean {
     let str:string=x.toString();
    if(str === [...str].reverse().join("")) return true;
    return false;

};
console.log(isPalindromeByStr(12122121));
