// https://leetcode.com/problems/monotonic-array
function isMonotonic1(nums: number[]): boolean {
    let p = 0;
    for (let i = 1; i < nums.length; i++) {
        if (!p) {
            if (nums[i - 1] < nums[i]) p = 1;
            else if ((nums[i - 1] > nums[i])) p = -1
        } else if ((p > 0 && nums[i - 1] > nums[i]) || (p < 0 && nums[i - 1] < nums[i])) return false;
    }
    return true;
}

function isMonotonic(nums: number[]): boolean {
    let increasing = false, decreasing = false;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) increasing = true;
        else if ((nums[i - 1] > nums[i])) decreasing = true;
        if (increasing && decreasing) return false;
    }
    return true;
}
