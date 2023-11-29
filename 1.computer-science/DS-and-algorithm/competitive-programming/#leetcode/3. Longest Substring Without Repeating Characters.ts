//https://leetcode.com/problems/longest-substring-without-repeating-characters
function lengthOfLongestSubstring(s: string): number {
    let obj: { [key: string]: number } = {}, i = 0, max = 0, startIndex = 0, endIndex = 0;
    for (i = 0; i < s.length; i++) {
        endIndex = i;
        if (obj[s[i]] != undefined && obj[s[i]] + 1 > startIndex) startIndex = obj[s[i]] + 1
        if (endIndex - startIndex + 1 > max) max = endIndex - startIndex + 1
        obj[s[i]] = i;
    }
    return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
