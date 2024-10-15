//https://leetcode.com/problems/find-the-difference
function findTheDifference(s: string, t: string): string {
    let objA: { [key: string]: number; } = {};
    for (let i = 0; i < t.length; i++) {
        if(i<s.length) if (s[i] in objA) objA[s[i]]++; else objA[s[i]] = 1;
        if (t[i] in objA) objA[t[i]]--; else objA[t[i]] = -1;
    }
    for (let i = 0; i < t.length; i++) if(objA[t[i]]<0) return t[i];
    return "";
};
function findTheDifference1(s: string, t: string): string {
    let charCode=t.charCodeAt(0);
    for(let i=0; i<s.length; i++) charCode+=t.charCodeAt(i+1)-s.charCodeAt(i);
    return String.fromCharCode(charCode);
};
