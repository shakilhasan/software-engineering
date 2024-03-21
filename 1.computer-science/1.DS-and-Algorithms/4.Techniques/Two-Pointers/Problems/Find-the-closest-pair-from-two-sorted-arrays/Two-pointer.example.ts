function printClosest1(ar1: number[], ar2: number[], m: number, n: number, x: number) {
    let l = 0, r = n - 1, diff = Number.MAX_VALUE, res_l = 0, res_r = 0;
    while (l < m && r >= 0) {
        if (Math.abs(ar1[l] + ar2[r] - x) < diff) {
            res_l = l;
            res_r = r;
            diff = Math.abs(ar1[l] + ar2[r] - x);
        }
        if (ar1[l] + ar2[r] > x) r--;
        else l++;
    }
    return [ar1[res_l], ar2[res_r]];
}

const ar1 = [1, 4, 5, 7], ar2 = [10, 20, 30, 40];
console.log(printClosest1(ar1, ar2, ar1.length, ar2.length, 38)); // [7, 30]
console.log(printClosest1([11, 41, 51, 71], [10, 20, 30, 40], 4, 4, 38)); // [7, 30]
