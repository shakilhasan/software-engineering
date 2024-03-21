function findTriplet(arr: number[], n: number) {
    arr.sort((a, b) => a - b);
    for (let i = n - 1; i >= 0; i--) {
        let j = 0, k = i - 1;
        while (j < k)
            if (arr[i] == arr[j] + arr[k]) return [arr[i], arr[j], arr[k]];
            else if (arr[i] > arr[j] + arr[k]) j++;
            else k--;
    }
    return [];
}

console.log(findTriplet([5, 32, 1, 7, 10, 50, 19, 21, 2], 9)); // [21, 2, 19]
