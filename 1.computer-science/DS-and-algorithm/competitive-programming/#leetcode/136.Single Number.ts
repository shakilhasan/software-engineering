//https://leetcode.com/problems/single-number
function singleNumber(nums: number[]): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
}

function singleNumber2(nums: number[]): number {
    return nums.reduce((c, s) => c ^ s, 0)
}

//using object, hash
function singleNumber3(nums: number[]): number {
    const obj: any = {}
    for (const num of nums) if (num in obj) obj[num] = 0; else obj[num] = 1;
    for (const key in obj) if (obj[key]) return Number(key);
    return 0;
}


