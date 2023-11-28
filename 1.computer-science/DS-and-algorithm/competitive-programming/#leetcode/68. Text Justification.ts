function fullJustify(words: string[], maxWidth: number): string[] {
    let [i, j, wordLen, wordCount, resIndex] = [0, 0, 0, 0, 0], result: string[] = [], word = '';
    words[words.length] = new Array(maxWidth).join('*');
    for (i; i < words.length-1; i++) {
        wordLen += words[i].length;
        ++wordCount;
        if (wordLen + words[i + 1].length + wordCount > maxWidth) {
            if (wordCount === 1) word += words[i] + new Array(maxWidth - wordLen).join(' ');
            else {
                const space = Math.floor((maxWidth - wordLen) / (wordCount - 1));
                let mod = (maxWidth - wordLen) % (wordCount - 1);
                console.log(`def- ${maxWidth - wordLen}, wordCount- ${wordCount-1}, space- ${space} , mod- ${mod}`);
                for (j = i - wordCount + 1; j < i; j++) {
                    word += words[j] + (new Array(space+1).join(' '));
                    if (mod > 0) word += ' ', mod--;
                }
                word +=words[j];
            }
            result[resIndex++] = word, wordLen = 0, wordCount = 0;
            word = '';
        }
    }
    return result;
}

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
console.log(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16));
console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20));
