//https://leetcode.com/problems/binary-search/
function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1, mid = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target > nums[mid]) left = mid + 1
        else if (target < nums[mid]) right = mid - 1;
        else return mid;
    }
    return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
