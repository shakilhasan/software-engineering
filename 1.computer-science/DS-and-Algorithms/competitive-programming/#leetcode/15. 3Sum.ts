//https://leetcode.com/problems/3sum
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    let p = 0, q = nums.length - 1, result: number[][] = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        p = i + 1, q = nums.length - 1;
        while (p < q) {
            if (nums[i] + nums[p] + nums[q] == 0) {
                while (p < q && nums[p] === nums[p + 1]) p++;
                while (p < q && nums[q] === nums[q - 1]) q--;
                result.push([nums[i], nums[p], nums[q]]);
                p++, q--;
            } else if (nums[i] + nums[p] + nums[q] > 0) q--; else p++;
        }
    }
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
