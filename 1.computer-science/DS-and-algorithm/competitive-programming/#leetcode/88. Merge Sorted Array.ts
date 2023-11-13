function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = 0, j = 0, p = 0, c: number[] = [];
    while (i < m || j < n) {
        if ((nums1[i] <= nums2[j] || j >= n) && i < m) {
            c[p++] = nums1[i];
            i++;
        } else {
            c[p++] = nums2[j];
            j++;
        }
    }
    // nums1=c
    for (i = 0; i < c.length; i++) {
        nums1[i] = c[i]
    }
    console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
