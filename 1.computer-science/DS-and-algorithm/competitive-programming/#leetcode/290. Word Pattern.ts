//https://leetcode.com/problems/word-pattern
function wordPattern(pattern: string, s: string): boolean {
    const str = s.split(' '), sObj: { [k: string]: string } = Object.create(null), tObj: { [key: string]: string } = Object.create(null)
    for (let i = 0; i < str.length; i++) {
        if (str.length !== pattern.length || (str[i] in sObj && sObj[str[i]] != pattern[i]) ||( pattern[i] in tObj && tObj[pattern[i]] != str[i])) return false;
        else sObj[str[i]] = pattern[i], tObj[pattern[i]] = str[i];
    }
    return true;
}

console.log(wordPattern("abba", "dog constructor constructor dog"));
