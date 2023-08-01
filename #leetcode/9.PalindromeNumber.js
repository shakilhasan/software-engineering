"use strict";
// https://leetcode.com/problems/palindrome-number
function isPalindromeByStr(x) {
    let str = x.toString();
    return str === [...str].reverse().join("");
}
console.log(isPalindromeByStr(12122121));
