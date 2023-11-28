// https://leetcode.com/problems/two-sum
function twoSum1(nums: number[], target: number): number[] {
    let i = 0, obj: { [k: number]: number } = {}
    for (i; i < nums.length; i++) {
        if (target - nums[i] in obj) break;
        obj[nums[i]] = i;
    }
    return [obj[target - nums[i]], i];
}

console.log(twoSum1([2, 7, 11, 15], 9));
