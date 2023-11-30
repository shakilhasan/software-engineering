function minWindow(s: string, t: string): string {
    const baseIndexes: number[] = [], tObj: { [k: string]: number } = {}, sObj: { [k: string]: number } = {},
        tLen = t.length, sLen = s.length;
    let min = sLen+1, p = 0, matchCount = 0;
    for (let i = 0; i < tLen; i++) (t[i] in tObj) ? tObj[t[i]]++ : tObj[t[i]] = 1;
    if (tLen < sLen) {
        for (let i = 0; i < sLen; i++) {
            if (s[i] in tObj) {
                baseIndexes.push(i);
                (s[i] in sObj) ? ++sObj[s[i]] : sObj[s[i]] = 1;
                if (sObj[s[i]] <= tObj[s[i]]) ++matchCount;
                // console.log(sObj[s[i]]);
                if (matchCount === tLen) {
                    while (sObj[s[baseIndexes[p]]] > tObj[s[baseIndexes[p]]]) {
                        sObj[s[baseIndexes[p]]] -= 1;
                        ++p;
                    }
                    if (min > i - baseIndexes[p] + 1) {
                        min = i - baseIndexes[p] + 1;
                    }
                    sObj[s[baseIndexes[p]]] -= 1;
                    ++p;
                    matchCount--;
                }
            }
        }
    } else if (tLen == sLen) {
        if (s.split("").sort().join("") === t.split("").sort().join("")) return s;
        else return '';
    }
    console.log(`baseIndexes[${p ? p - 1 : 0}]-${baseIndexes[p ? p - 1 : 0]}, min-${(sLen - min) ? min : 0}`);
    return s.substr(baseIndexes[p ? p - 1 : 0] ?? 0, (min===sLen+1) ? 0 : min);
}

// console.log(minWindow("ADOBECODEBANC", "ABC"));
// console.log(minWindow("a", "a")); //t-2,r-a
// console.log(minWindow("a", "aa"));//''
// console.log(minWindow("ab", "a"));//r-a
// console.log(minWindow("a", "b"));//''
// console.log(minWindow("ab", "b"));//t-77
// console.log(minWindow("ab", "A"));//t-172,r-''
// console.log(minWindow("abc", "ac"));//t-202,r-'abc'
console.log(minWindow("cabwefgewcwaefgcf", "cae"));//t-207,r-'cwae'

