function balancedStringSplit(s: string): number {
    let r = 0, l = 0, count = 0;
    for (const char of s) {
        (char === 'R') ? r++ : l++;
        if (r === l) count++, r = 0, l = 0;
    }
    return count;
}

console.log(balancedStringSplit("RLRRLLRLRL"));//4
console.log(balancedStringSplit("RLRRRLLRLL"));//2
console.log(balancedStringSplit("LLLLRRRR"));//1
