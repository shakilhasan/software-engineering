//https://leetcode.com/problems/gas-station/description
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let [i, circuit, rest, start, count] = [0, 0, 0, 0, 0];
    while (circuit < 2) {
        if (rest + gas[i] - cost[i] >= 0) rest = rest + gas[i] - cost[i];
        else {
            start = i + 1;
            count = 0;
            rest = 0;
        }
        if (i === gas.length - 1) {
            i = -1;
            circuit++;
        }
        if (count === gas.length) return start;
        i++;
        count++;
    }
    return -1;
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]))
console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]))
console.log(canCompleteCircuit([5], [4]))
