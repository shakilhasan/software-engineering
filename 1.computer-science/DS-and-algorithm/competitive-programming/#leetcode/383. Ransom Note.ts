//https://leetcode.com/problems/ransom-note
function canConstruct(ransomNote: string, magazine: string): boolean {
    const obj: { [k: string]: number } = {}
    for (let i = 0; i < magazine.length; i++) {
        (obj[magazine[i]]) ? obj[magazine[i]]++ : obj[magazine[i]] = 1;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (obj[ransomNote[i]]) obj[ransomNote[i]]--;
        else return false;
    }
    return true;
}

console.log(canConstruct('a', 'b'))
