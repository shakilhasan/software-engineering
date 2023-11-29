// https://leetcode.com/problems/palindrome-number

function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    let remainder: number, reversed: number = 0, num: number = x;
    while (x != 0) {
        remainder = x % 10;
        reversed = reversed * 10 + remainder;
        x = Math.floor(x / 10);
    }
    return num == reversed;
}

function isPalindromeByStr(x: number): boolean {
    const str: string = x.toString();
    return str === [...str].reverse().join("");
}

console.log(isPalindrome(12122121));
console.log(isPalindromeByStr(12122121));
