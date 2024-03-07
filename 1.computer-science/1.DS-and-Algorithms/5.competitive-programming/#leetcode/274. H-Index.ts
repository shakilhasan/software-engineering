// https://leetcode.com/problems/h-index/description
function hIndex(citations: number[]): number {
    citations.sort((a, b) => b - a);
    let i = 0;
    while (i < citations.length) {
        if (i + 1 > citations[i]) return i
        i++;
    }
    return citations.length;
}

console.log(hIndex([3, 0, 6, 1, 5]))
console.log(hIndex([1, 2]))
console.log(hIndex([11, 15]))
