"use strict";
function isAnagram(s, t) {
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]])
            hash[s[i]] = hash[s[i]] + 1;
        else
            hash[s[i]] = 1;
        if (hash[t[i]])
            hash[t[i]] = hash[t[i]] - 1;
        else
            hash[t[i]] = -1;
    }
    const valuesArray = Object.values(hash);
    const sum = valuesArray.reduce((acc, curr) => acc + curr, 0);
    return !sum;
}
;
console.log(isAnagram("anagram", "pagaram"));
