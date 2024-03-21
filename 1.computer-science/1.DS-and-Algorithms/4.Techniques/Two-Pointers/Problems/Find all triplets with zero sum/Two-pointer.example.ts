function findTriplets(arr: number[], n: number) {
    const result: Array<number>[] = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n - 1; i++) {
        let l = i + 1, r = n - 1;
        const x = arr[i];
        while (l < r)
            if (x + arr[l] + arr[r] === 0) {
                result.push([x, arr[l], arr[r]]);
                l++;
                r--;
            } else if (x + arr[l] + arr[r] < 0) l++; else r--;
    }
    return result;
}

console.log(findTriplets([0, -1, 2, -3, 1], 5)); // [[0 -1 1], [2 -3 1]]
console.log(findTriplets([0, 1, 2, 3, 1], 5)); //[]
