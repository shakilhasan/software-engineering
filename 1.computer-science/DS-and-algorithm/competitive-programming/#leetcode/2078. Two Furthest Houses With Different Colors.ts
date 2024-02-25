function maxDistance(colors: number[]): number {
    const len = colors.length;
    let i, j;
    if (colors[0] !== colors[len - 1]) return len - 1;
    for (i = 0; i < len; i++) if (colors[i] !== colors[i + 1]) break;
    for (j = len - 1; j >= 0; j--) if (colors[j] !== colors[j - 1]) break;
    return len - Math.min(i + 1, len - j) - 1
}

console.log(maxDistance([1, 1, 1, 6, 1, 1, 1])); //3
console.log(maxDistance([1, 8, 3, 8, 3])); //4
console.log(maxDistance([0, 1])); //1
