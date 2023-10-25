function singleNumber(nums: number[]): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
}
function singleNumber2(nums: number[]): number {
    return nums.reduce((c,s)=>c^s,0)
}

