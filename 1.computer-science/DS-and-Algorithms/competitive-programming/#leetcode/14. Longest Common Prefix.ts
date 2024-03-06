// https://leetcode.com/problems/longest-common-prefix/
function longestCommonPrefix(strs: string[]): string {
    let size: number = strs.length, i = 0;
    strs.sort();
    while (i < strs[0].length && strs[0][i] == strs[size - 1][i]) i++;
    return strs[0].substring(0, i);
}

console.log(longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"]));
