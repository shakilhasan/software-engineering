// https://leetcode.com/problems/valid-anagram
export function isAnagram1(s: string, t: string): boolean {
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
export function isAnagram(s: string, t: string): boolean {
    const obj:{[k: string]: number}={};
    if(s.length!==t.length)return false;
    for (let i = 0; i < s.length; i++){
        if(s[i] in obj) obj[s[i]]++; else obj[s[i]] =1;
        if(t[i] in obj) obj[t[i]]--; else obj[t[i]] =-1;
    }
    for (const key in obj) if(obj[key]) return false;
    return true;
};
console.log(isAnagram("ab", "ba"))
