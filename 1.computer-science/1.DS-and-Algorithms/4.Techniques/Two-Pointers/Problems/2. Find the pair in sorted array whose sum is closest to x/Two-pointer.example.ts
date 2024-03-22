function printClosest(arr:number[], n:number, x:number) {
    let res_l = 0, res_r = 0;
    let l = 0, r = n - 1, diff = Number.MAX_VALUE;
    while (r > l) {
        if (Math.abs(arr[l] + arr[r] - x) < diff) {
            res_l = l;
            res_r = r;
            diff = Math.abs(arr[l] + arr[r] - x);
        }
        if (arr[l] + arr[r] > x) r--;
        else l++;
    }
    console.log(" The closest pair is " + arr[res_l] + " and " + arr[res_r]);
}

let arr1:number[] = [10, 22, 28, 29, 30, 40], x = 54;
let n = arr1.length;
printClosest(arr1, n, x);
