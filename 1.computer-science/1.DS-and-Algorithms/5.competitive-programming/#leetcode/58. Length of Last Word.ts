// https://leetcode.com/problems/length-of-last-word
function lengthOfLastWord(s: string): number {
    let len = 0, i, p = 0;
    for (i = s.length - 1; i >= 0; i--) {
        if (s[i] != ' ') len++;
        else if (len && s[i] == ' ') break;
    }
    return len;
}
console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("a")) //1
console.log(lengthOfLastWord("a ")) //1
