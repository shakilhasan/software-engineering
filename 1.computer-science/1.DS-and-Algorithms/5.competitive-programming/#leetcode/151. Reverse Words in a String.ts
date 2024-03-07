function reverseWords(s: string): string {
    let result = ' ', word = [], p = 0;
    s = ' ' + s.trim();
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ' && p) result += word.reverse().join('') + ' ', p = 0, word = [];
        else if(s[i] !== ' ') word[p++] = s[i];
    }
    return result.trim();
}

console.log(reverseWords("a good   example"));
