//https://leetcode.com/problems/longest-substring-without-repeating-characters
function lengthOfLongestSubstring(s: string): number {
    let obj: { [key: string]: number } = {}, i = 0, max = 0, count = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] in obj) i = obj[s[i]], count = 0, obj = {};
        else count++, obj[s[i]] = i;
        if (max < count) max = count;
    }
    return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
