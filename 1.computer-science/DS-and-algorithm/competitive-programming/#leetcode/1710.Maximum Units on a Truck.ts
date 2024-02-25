function maximumUnits(boxTypes: number[][], truckSize: number): number {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let sum = 0, count = 0;
    for (const box of boxTypes) {
        if (count + box[0] >= truckSize) return sum+(truckSize-count)*box[1];
        sum += box[0] * box[1];
        count += box[0];
    }
    return sum;
}

console.log(maximumUnits([[1, 3], [2, 2], [3, 1]], 4)); //8
console.log(maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10));//91
console.log(maximumUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]],35));//76
