// https://leetcode.com/problems/valid-anagram
function isAnagram(s: string, t: string): boolean {
    let obj: { [k: string]: number } = {}
    if (s.length != t.length) return false;
    for (let i = 0; i < s.length; i++) {
        (obj[s[i]]) ? obj[s[i]]++ : obj[s[i]] = 1;
        (obj[t[i]]) ? obj[t[i]]-- : obj[t[i]] = -1;
        if (obj[s[i]] === 0) delete obj[s[i]];
        if (obj[t[i]] === 0) delete obj[t[i]];
    }
    return !Object.keys(obj).length;
}

console.log(isAnagram("ab", "ba"))
