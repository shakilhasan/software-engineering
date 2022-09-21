"use strict";
// https://leetcode.com/problems/palindrome-number
function isPalindromeByStr(x) {
    let str = x.toString();
    if (str === [...str].reverse().join(""))
        return true;
    return false;
}
;
console.log(isPalindromeByStr(12122121));
