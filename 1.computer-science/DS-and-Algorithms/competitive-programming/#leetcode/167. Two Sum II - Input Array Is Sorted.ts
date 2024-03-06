// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
function twoSum(nums: number[], target: number): number[] {
    let i = 0, j = nums.length - 1;
    while (i < j) {
        if (nums[i] + nums[j] < target) i++;
        else if (nums[i] + nums[j] > target) j--;
        else break;
    }
    return [i+1, j+1]
}

console.log(twoSum([2, 7, 11, 15], 9));
