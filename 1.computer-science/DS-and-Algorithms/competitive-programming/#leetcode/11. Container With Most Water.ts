function maxArea(height: number[]): number {
    let [i, j, lMaxIndex, rMaxIndex, sum] = [0, height.length - 1, 0, height.length - 1, 0];
    while (i != j) {
        if (height[lMaxIndex] < height[i]) lMaxIndex = i;
        if (height[rMaxIndex] < height[j]) rMaxIndex = j;

        let water = Math.min(height[lMaxIndex], height[rMaxIndex]) * (rMaxIndex - lMaxIndex)
        if (water > sum) sum = water;

        if (height[lMaxIndex] > height[rMaxIndex]) j--;
        else i++;
    }
    return sum;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
