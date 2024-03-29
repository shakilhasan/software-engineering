//https://leetcode.com/problems/valid-palindrome
const isAlphaNumeric = (char: string) => ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'));

function isPalindrome1(s: string): boolean {
    let p = 0, q = s.length - 1;
    s = s.toLowerCase();
    while (p < q) {
        if (!isAlphaNumeric(s[p])) {
            p++;
            continue;
        }
        if (!isAlphaNumeric(s[q])) {
            q--;
            continue;
        }
        if (s[p] === s[q]) {
            p++;
            q--;
        } else
            return false;
    }
    return true;
}

function isPalindrome2(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let p = 0, q = s.length - 1;
    while (p < q) {
        if (s[p] !== s[q]) return false;
        p++;
        q--;
    }
    return true;
}

console.log(isPalindrome2("0P"));
console.log(isPalindrome1("0P"));
