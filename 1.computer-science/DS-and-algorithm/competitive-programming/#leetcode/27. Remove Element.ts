//https://leetcode.com/problems/remove-element/description
function removeElement(nums: number[], val: number): number {
    let i = 0, p = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != val) nums[p++] = nums[i];
    }
    return p;
}
