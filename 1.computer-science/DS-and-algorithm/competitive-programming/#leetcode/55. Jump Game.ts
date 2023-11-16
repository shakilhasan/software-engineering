//https://leetcode.com/problems/jump-game/description
function canJump(nums: number[]): boolean {
    let length = nums.length, i = 0, availableSteps = nums[0];
    for (i = 0; i <= availableSteps; i++) {
        if (i + nums[i] >= length - 1) return true
        availableSteps = Math.max(availableSteps, i + nums[i])
    }
    return false;
}
console.log(canJump([3,2,1,0,4]))
