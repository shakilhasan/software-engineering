function resultArray(nums: number[]): number[] {
    let p = 0, q = 0, a = [nums[0]], b = [nums[1]];
    for (let i = 2; i < nums.length; i++) {
        if (a[p] > b[q]) a[++p] = nums[i];
        else b[++q] = nums[i];
    }
    return a.concat(b);
}
console.log(resultArray([2, 1, 3])) //[2,3,1]
console.log(resultArray([5, 4, 3, 8])) //[5,3,4,8]
