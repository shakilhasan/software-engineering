function find4Numbers(A: number[], n: number, X: number) {
    let l, r;
    A.sort((a, b) => a - b);
    for (let i = 0; i < n - 3; i++) {
        for (let j = i + 1; j < n - 2; j++) {
            l = j + 1;
            r = n - 1;
            while (l < r) if (A[i] + A[j] + A[l] + A[r] == X) {
                console.log(A[i] + ' ' + A[j] + ' ' + A[l] + ' ' + A[r] + '\n');
                l++;
                r--;
            } else if ((A[i] + A[j] + A[l] + A[r]) < X) l++; else r--;
        }
    }
}

find4Numbers([1, 4, 45, 6, 10, 12], 6, 21); // 1, 4, 6, 10
