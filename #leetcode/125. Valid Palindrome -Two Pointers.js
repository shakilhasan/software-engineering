"use strict";
//https://leetcode.com/problems/valid-palindrome
function isAlphaNumeric(char) {
    return ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'));
}
// @ts-ignore
function isPalindrome(s) {
    let p = 0, q = s.length - 1, str = [...s.toLowerCase()];
    while (p < q) {
        if (!isAlphaNumeric(str[p])) {
            p++;
            continue;
        }
        if (!isAlphaNumeric(str[q])) {
            q--;
            continue;
        }
        if (str[p] === str[q]) {
            p++;
            q--;
        }
        else
            return false;
    }
    return true;
}
console.log(isPalindrome("0P"));
