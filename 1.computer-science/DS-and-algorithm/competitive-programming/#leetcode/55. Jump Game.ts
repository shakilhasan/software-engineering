//https://leetcode.com/problems/jump-game/description
function canJump(nums: number[]): boolean {
    let length = nums.length, i = 0, limit = nums[0];
    for (i = 0; i <= limit; i++) {
        if (i + nums[i] >= length - 1) return true
        if (nums[i] + i > limit) limit = i + nums[i]
    }
    return false;
}
console.log(canJump([3,2,1,0,4]))
