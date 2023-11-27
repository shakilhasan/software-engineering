function candy(ratings: number[]): number {
    const len = ratings.length, candies: number[] = new Array<number>(len);
    candies.fill(1);
    for (let i = 0; i < len - 1; i++) {
        if (ratings[i] < ratings[i + 1]) candies[i + 1] = candies[i] + 1;
    }
    for (let i = len - 1; i > 0; i--) {
        if (ratings[i] < ratings[i - 1] && candies[i - 1] < candies[i] + 1) candies[i - 1] = candies[i] + 1;
    }
    return candies.reduce((a, b) => a + b);
}

console.log(candy([1, 3, 4, 5, 2]));
