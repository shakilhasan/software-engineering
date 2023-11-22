function sumEvenAfterQueries(nums: number[], queries: number[][]): number[] {
    const result = [];
    for(let i = 0; i < queries.length; i++) {
        const [val, index] = queries[i];
        nums[index] += val;
        result[i] = nums.reduce((a, b) => a + (b % 2 === 0 ? b : 0), 0);
    }
    return result;
}

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]));
