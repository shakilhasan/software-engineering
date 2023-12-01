function minWindow(s: string, t: string): string {
    const baseIndexes: number[] = [], tObj: { [k: string]: number } = {}, sObj: { [k: string]: number } = {},
        tLen = t.length, sLen = s.length;
    let min = sLen + 1, baseIndex = 0, matchCount = 0, minLenBaseIndex;
    for (let i = 0; i < tLen; i++) (t[i] in tObj) ? tObj[t[i]]++ : tObj[t[i]] = 1;
    if (tLen < sLen) for (let i = 0; i < sLen; i++) {
        if (s[i] in tObj) {
            baseIndexes.push(i);
            (s[i] in sObj) ? sObj[s[i]]++ : sObj[s[i]] = 1;
            if (sObj[s[i]] <= tObj[s[i]]) matchCount++;
            if (matchCount === tLen) {
                while (sObj[s[baseIndexes[baseIndex]]] > tObj[s[baseIndexes[baseIndex]]]) sObj[s[baseIndexes[baseIndex]]]--, baseIndex++;
                if (min > i - baseIndexes[baseIndex] + 1) min = i - baseIndexes[baseIndex] + 1, minLenBaseIndex = baseIndex;
                sObj[s[baseIndexes[baseIndex]]]--, baseIndex++, matchCount--;
            }
        }

    } else if (tLen == sLen) if (s.split("").sort().join("") === t.split("").sort().join("")) return s; else return '';
    return s.substr(baseIndexes[minLenBaseIndex ? minLenBaseIndex : 0] ?? 0, (min === sLen + 1) ? 0 : min);
}

console.log(minWindow("cabwefgewcwaefgcf", "cae"));//t-207,r-'cwae'
