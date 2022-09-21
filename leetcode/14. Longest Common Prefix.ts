// https://leetcode.com/problems/longest-common-prefix/
function longestCommonPrefix(strs: string[]): string {
        let size:number = strs.length;
        if (size == 1) return strs[0];
        strs.sort();
        let i:number = 0;
        while (i < strs[0].length && strs[0][i] == strs[size-1][i] )
            i++;
        let pre:string = strs[0].substring(0, i);
        return pre;
    }

console.log( longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"]));
