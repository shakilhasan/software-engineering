function answerQueries(nums: number[], queries: number[]): number[] {
    const ans: number[] = [];
    nums = nums.sort((a, b) => a - b);
    for (const q of queries) {
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (sum > q || (sum <= q && i === nums.length - 1)) {
                if (sum <= q && i === nums.length - 1) ans.push(i + 1);
                else ans.push(i);
                break;
            }
        }
    }
    return ans;
}

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21])) //[2,3,4]
console.log(answerQueries([2, 3, 4, 5], [1])) //[ 0 ]
console.log(answerQueries([1000000], [1000000])) //[ 1 ]

