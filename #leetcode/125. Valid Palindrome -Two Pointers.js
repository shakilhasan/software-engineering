"use strict";
//https://leetcode.com/problems/valid-palindrome
const isAlphaNumeric = (char) => ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'));
// @ts-ignore
function isPalindrome(s) {
    let p = 0, q = s.length - 1;
    s = s.toLowerCase();
    while (p < q) {
        if (!isAlphaNumeric(s[p])) {
            p++;
            continue;
        }
        if (!isAlphaNumeric(s[q])) {
            q--;
            continue;
        }
        if (s[p] === s[q]) {
            p++;
            q--;
        }
        else
            return false;
    }
    return true;
}
function isPalindrome2(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let p = 0, q = s.length - 1;
    while (p < q) {
        if (s[p] !== s[q])
            return false;
        p++;
        q--;
    }
    return true;
}
console.log(isPalindrome2("0P"));
