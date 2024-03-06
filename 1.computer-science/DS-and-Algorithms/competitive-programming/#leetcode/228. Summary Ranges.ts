function summaryRanges(nums: number[]): string[] {
    let p = nums[0], result: string[] = [];
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] + 1 != nums[i]) {
            result.push(p === nums[i - 1] ? String(p) : (p + '->' + nums[i - 1]));
            p = nums[i];
        }
    }
    return result;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));     //["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));  //["0","2->4","6","8->9"]
