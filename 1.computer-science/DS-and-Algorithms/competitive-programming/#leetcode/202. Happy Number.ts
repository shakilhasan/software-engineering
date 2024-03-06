//https://leetcode.com/problems/happy-number
function isHappy(n: number): boolean {
    const obj: { [k: number]: boolean } = {};
    while (n >= 1) {
        let sum = 0;
        while (n >= 1) sum = sum + Math.pow(n % 10, 2), n = Math.floor(n / 10);
        if (sum === 1) return true;
        else if (sum in obj) return false;
        obj[sum] = true;
        n = sum;
    }
    return false;
}

console.log(isHappy(19));
