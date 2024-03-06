//https://leetcode.com/problems/longest-consecutive-sequence
function longestConsecutive(nums: number[]): number {
    const obj: { [k: number]: boolean } = {};
    let max = 0;
    for (let i = 0; i < nums.length; i++) obj[nums[i]] = true;
    for (let i = 0; i < nums.length; i++) if (obj[nums[i]]) {
        let count = 1, num = nums[i];
        obj[num] = false;
        while (num + 1 in obj) num++, count++, obj[num] = false;
        num = nums[i];
        while (num - 1 in obj) num--, count++, obj[num] = false;
        if (count > max) max = count;
    }
    return max;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
