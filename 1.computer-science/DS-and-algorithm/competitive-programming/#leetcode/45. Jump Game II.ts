//https://leetcode.com/problems/jump-game-ii/description
function jump(nums: number[]): number {
    let length = nums.length, i = 0, availableSteps = 0, targetIndex = 0, jumpCount = 0;
    if (length === 1) return 0;
    for (i = 0; i <= availableSteps; i++) {
        if (i + nums[i] >= length - 1) return jumpCount + 1;
        availableSteps = Math.max(availableSteps, i + nums[i])
        if (i === targetIndex) {
            targetIndex = availableSteps;
            jumpCount++;
        }
    }
    return jumpCount
}

console.log(jump([2, 9, 6, 5, 7, 0, 7, 2, 7, 9, 3, 2, 2, 5, 7, 8, 1, 6, 6, 6, 3, 5, 2, 2, 6, 3]));
