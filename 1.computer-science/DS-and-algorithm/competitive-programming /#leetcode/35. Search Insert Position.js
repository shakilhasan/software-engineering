/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let  mid= Math.floor(left+right/2);
        if(target===nums[mid]) return  mid;
        else if(target<nums[mid]) right=mid-1;
        else left=mid+1;
    }
    return left;
};

let res= searchInsert([1,3,5,6], 7);
console.log(res);
