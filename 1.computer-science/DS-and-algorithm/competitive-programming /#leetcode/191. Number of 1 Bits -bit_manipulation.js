"use strict";
//https://leetcode.com/problems/number-of-1-bits
function hammingWeight(n) {
    let result = 0;
    while (n) {
        result = result + (n & 1);
        n = n >>> 1;
    }
    return result;
}
