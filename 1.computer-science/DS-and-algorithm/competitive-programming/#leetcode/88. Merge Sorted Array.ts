function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m, j = n, p = m + n;
    while ((i || j) && p) {
        if ((nums1[i - 1] >= nums2[j - 1] && i) || !j) nums1[--p] = nums1[--i];
        else nums1[--p] = nums2[--j];
    }
}

merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
