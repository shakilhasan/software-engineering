//https://leetcode.com/problems/gas-station/description
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let i = 0, circuit = 0, rest = 0, start = 0, len = gas.length, count = 0;
    if (len === 1 && cost[0] <= gas[0]) return 0;
    while (!(circuit > 0 && i > len - 2) && len > 1) {
        if (rest + gas[i] - cost[i] >= 0) rest = rest + gas[i] - cost[i];
        else {
            start = i + 1;
            count = 0;
            rest = 0;
        }
        if (i === len - 1) {
            i = -1;
            circuit++;
        }
        if (count === len) return start;
        i++;
        count++;
    }
    return -1;
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]))
console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]))
