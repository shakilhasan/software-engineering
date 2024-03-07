function fullJustify(words: string[], maxWidth: number): string[] {
    let [i, j, wordLen, wordCount, resIndex, isLast] = [0, 0, 0, 0, 0, false], result: string[] = [], word = '';
    words[words.length] = new Array(maxWidth).join('*');
    for (i; i < words.length - 1; i++) {
        wordLen += words[i].length, isLast = (i === words.length - 2), wordCount++;
        if (wordLen + words[i + 1].length + wordCount > maxWidth) {
            if (wordCount === 1) word += words[i] + new Array(maxWidth - wordLen + 1).join(' ');
            else {
                let space = Math.floor((maxWidth - wordLen) / (wordCount - 1)),
                    mod = (maxWidth - wordLen) % (wordCount - 1);
                for (j = i - wordCount + 1; j < i; j++) {
                    word += words[j] + new Array(isLast ? 2 : (space + 1)).join(' ');
                    if (!isLast && mod > 0) word += ' ', mod--;
                }
                word += words[j] + (isLast ? new Array(maxWidth - wordLen - wordCount + 2).join(' ') : '');
            }
            result[resIndex++] = word, wordLen = 0, wordCount = 0, word = '';
        }
    }
    return result;
}

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
