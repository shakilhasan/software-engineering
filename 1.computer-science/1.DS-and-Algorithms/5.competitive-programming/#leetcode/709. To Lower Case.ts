// https://leetcode.com/problems/to-lower-case
function toLowerCase(s: string): string {
    let r = "";
    for (let i = 0; i < s.length; i++) {
        let c = s.charCodeAt(i);
        if (65 <= c && c <= 90) r += String.fromCharCode(c + 32)
        else r += s[i]
    }
    return r;
};
console.log(toLowerCase("Hello"))//"hello"
console.log(toLowerCase("al&phaBET"))//"al&phabet"
