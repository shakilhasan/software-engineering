// https://leetcode.com/problems/two-sum
function twoSum(nums: number[], target: number): number[] {
    let len:number = nums.length
    let a:number[] = [];
    for (let i:number = 0; i < len-1; i++) {
        for (let j = i+1; j < len; j++) {
            if (nums[i] + nums[j] == target) {
                a[0] = i;
                a[1] = j;
                break;
            }
        }
    }
    return a;
}

console.log(twoSum([2, 7, 11, 15], 9));
