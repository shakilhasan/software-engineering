function strStr(haystack: string, needle: string): number {
    let [i, j, count, index] = [0, 0, 0, 0];
    for (i; i < haystack.length; i++) {
        if (haystack[i] === needle[j]) j++, count++;
        else j = 0, count = 0, i = index, index++;
        if (count === needle.length) return index;
    }
    return -1;
}

console.log(strStr('mississippi', 'issip'));
