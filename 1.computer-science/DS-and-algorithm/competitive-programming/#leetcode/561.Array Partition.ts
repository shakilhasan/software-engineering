function arrayPairSum(nums: number[]): number {
    let sum = 0;
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i += 2) sum += nums[i]
    return sum;
}

console.log(arrayPairSum([1, 4, 3, 2]))//4
