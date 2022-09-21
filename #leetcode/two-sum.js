/**
 * @param {number[]} nums
 * @param {number} target
 * @return {*[]}
 */
const twoSum = function (nums, target) {
    let len = nums.length
    let a = [];
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (nums[i] + nums[j] == target) {
                a[0] = i;
                a[1] = j;
                return a;
                // break;
            }
        }
    }
};

let c=twoSum([1,3,4,5,6],7);
console.log(c);
