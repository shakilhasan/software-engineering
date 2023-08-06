"use strict";
// https://leetcode.com/problems/palindrome-number
// @ts-ignore
function isPalindrome(x) {
    if (x < 0)
        return false;
    let remainder, reversed = 0, num = x;
    while (x != 0) {
        remainder = x % 10;
        reversed = reversed * 10 + remainder;
        x = Math.floor(x / 10);
    }
    return num == reversed;
}
console.log(isPalindrome(12122121));
