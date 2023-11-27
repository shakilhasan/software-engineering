function isSubsequence(s: string, t: string): boolean {
    let [i, j] = [0, 0];
    for (i = 0; i < t.length; i++) {
        if (s[j] === t[i]) j++;
    }
    return j === s.length;
}

console.log(isSubsequence("abc", "ahbgdc"));
