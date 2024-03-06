//https://leetcode.com/problems/contains-duplicate/
function containsDuplicate(nums: number[]): boolean {
    const a:number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (a.includes(nums[i])) return true;
        a.push(nums[i]);
    }
    return false;
}

console.info(containsDuplicate([1,2,3,1]));
