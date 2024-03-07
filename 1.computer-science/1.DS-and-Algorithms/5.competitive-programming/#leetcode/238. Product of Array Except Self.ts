// https://leetcode.com/problems/product-of-array-except-self/description
function productExceptSelf(nums: number[]): number[] {
    let product = 1, answer = [], zero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) product = product * nums[i];
        else zero++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (zero > 1) answer[i] = 0;
        else if (zero == 1 && nums[i]) answer[i] = 0;
        else answer[i] = product / (nums[i] ? nums[i] : 1);
    }
    return answer;
}

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))
