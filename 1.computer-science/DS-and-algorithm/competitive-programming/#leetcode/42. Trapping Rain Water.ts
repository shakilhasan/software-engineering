function trap(height: number[]): number {
    let [i, j, lmax, rmax, sum] = [0, height.length - 1, 0, 0, 0];
    while (i != j) {
        if (lmax < height[i]) lmax = height[i];
        if (rmax < height[j]) rmax = height[j];
        if (lmax > rmax) sum += rmax - height[j], j--;
        else sum += lmax - height[i], i++;
    }
    return sum;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
