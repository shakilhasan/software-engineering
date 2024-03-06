function minSubArrayLen(target: number, nums: number[]): number {
    let min = 999999999, sum = 0, left = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            if (right - left < min) min = right - left + 1;
            sum -= nums[left++];
        }
    }
    if (min === 999999999) return 0;
    return min;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))//2
console.log(minSubArrayLen(4, [1, 4, 4]))//1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))//0
