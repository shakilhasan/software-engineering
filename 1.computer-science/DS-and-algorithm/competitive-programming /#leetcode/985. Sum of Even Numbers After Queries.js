/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = function(nums, queries) {
    for(let i = 0; i < queries.length; i++) {
        let [val, index] = queries[i];
        nums[index] += val;
        queries[i] = nums.reduce((a, b) => a + (b % 2 === 0 ? b : 0), 0);
    }
    console.log(queries);
    return queries;
};

sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]);
