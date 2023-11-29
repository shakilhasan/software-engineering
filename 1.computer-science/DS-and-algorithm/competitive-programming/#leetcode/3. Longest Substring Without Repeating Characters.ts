//https://leetcode.com/problems/longest-substring-without-repeating-characters
function lengthOfLongestSubstring(s: string): number {
    let obj: any = {}, i = 0, max = 0, count = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] in obj) {
            count = 1;//1;
            obj = {};//{[s[i]]:i};
            i = obj[s[i]] + 1;
        } else {
            count++;
            obj[s[i]] = i;
        }
        if (max < count) max = count;
    }
    return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("dvdf"));
