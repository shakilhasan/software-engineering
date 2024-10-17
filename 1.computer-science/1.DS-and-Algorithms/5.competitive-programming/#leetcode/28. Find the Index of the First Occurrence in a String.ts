function strStr1(haystack: string, needle: string): number {
    let [i, j, index] = [0, 0, 0, 0];
    for (i; i < haystack.length; i++) {
        if (haystack[i] === needle[j]) j++;
        else j = 0, i = index++;
        if (j === needle.length) return index;
    }
    return -1;
}
function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
}

console.log(strStr('sadbutsad', 'sad')); //0
console.log(strStr('leetcode', 'leeto')); //-1
console.log(strStr('mississippi', 'issip')); //4
