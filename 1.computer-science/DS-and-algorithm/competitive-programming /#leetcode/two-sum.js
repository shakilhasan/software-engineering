"use strict";
function twoSum(nums, target) {
    let len = nums.length;
    let a = [];
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] == target) {
                a[0] = i;
                a[1] = j;
                break;
            }
        }
    }
    return a;
}
let output = twoSum([2, 7, 11, 15], 9);
console.log(output);
