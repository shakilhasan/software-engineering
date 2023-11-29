//https://leetcode.com/problems/isomorphic-strings
function isIsomorphic(s: string, t: string): boolean {
    const sObj: { [k: string]: string } = {}, tObj: { [k: string]: string } = {}
    for (let i = 0; i < s.length; i++) {
        if ((s[i] in sObj && sObj[s[i]] != t[i]) || t[i] in tObj && tObj[t[i]] != s[i]) return false;
        else sObj[s[i]] = t[i], tObj[t[i]] = s[i];
    }
    return true;
}

console.log(isIsomorphic("badc", "baba"));
