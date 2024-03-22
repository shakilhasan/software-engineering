function find3Numbers(A: number[], arr_size: number, sum: number) {
    let l, r;
    A.sort((a, b) => a - b);
    for (let i = 0; i < arr_size - 2; i++) {
        l = i + 1;
        r = arr_size - 1;
        while (l < r) if (A[i] + A[l] + A[r] == sum) return ([A[i], A[l], A[r]]); else if (A[i] + A[l] + A[r] < sum) l++; else r--;
    }
    return [];
}

console.log(find3Numbers([1, 4, 45, 6, 10, 8], 6, 22)); //4, 8, 10
