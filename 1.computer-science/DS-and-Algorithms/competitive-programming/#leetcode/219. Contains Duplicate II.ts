//https://leetcode.com/problems/contains-duplicate-ii
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const obj: { [k: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in obj && i - obj[nums[i]] <= k) return true;
        obj[nums[i]] = i;
    }
    return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
